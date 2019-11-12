package cloud.travels.utils;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.junit.Assert;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.UnreachableBrowserException;

import cloud.travels.constants.common.BrowserConstants;
import cloud.travels.constants.common.DataConstants;
import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class BrowserUtils {
	public static WebDriver driver = null;
	public static String applicationUrl = null;
	public static String engineEnvironment = null;

	/**
	 * This method is used to return the browser instance
	 */
	public static WebDriver getDriverInstance() {
		if (driver == null) {
			driver = launchBrowser(null);
		}
		return driver;
	}

	@Before
	public static void launchUrl(Scenario scenario) throws InterruptedException {
		launchBrowser(scenario);
		getApplicationUrl();
		driver.get(applicationUrl);
		driver.manage().window().maximize();
		Cookie cookie = new Cookie("zaleniumMessage", scenario.getName());
		driver.manage().addCookie(cookie);
	}

	/**
	 * Get the remote WebDriver instance
	 * 
	 * @param capabilities
	 *            Desired capabilities
	 * @param scenario
	 *            Scenario info
	 * @return the driver or null
	 */
	private static WebDriver getRemoteDriver(MutableCapabilities capabilities, Scenario scenario) {
		String buildName = System.getProperty("buildName");
		capabilities.setCapability("build",
				buildName != null ? buildName : System.getProperty("url") + " - " + System.getProperty("application"));
		System.out.println(System.getProperty("url") + " - " + System.getProperty("application"));
		capabilities.setCapability("name", scenario.getName());
		System.out.println(scenario.getName());
		String seleniumGridUrl = System.getProperty("seleniumGridUrl");
		System.out.println(System.getProperty("seleniumGridUrl"));
		System.out.printf("Using Browser: %s\n", capabilities.getBrowserName());
		try {
			return new RemoteWebDriver(new URL(seleniumGridUrl), capabilities);

		} catch (UnreachableBrowserException e) {
			Assert.fail("UnreachableBrowserException: " + e.getMessage());
		} catch (MalformedURLException e) {
			Assert.fail("MalformedURLException: " + seleniumGridUrl);
		} catch (WebDriverException e) {
			Assert.fail("WebDriverException: " + e.getMessage());
		}
		return null;
	}

	/**
	 * This method is used to launch the browser instance
	 */
	private static WebDriver launchBrowser(Scenario scenario) {
		String browser = System.getProperty("browser");
		String driverPath = System.getProperty("pathToDriver");
		boolean useGrid = !System.getProperty("seleniumGridUrl").equals("none");
		switch (browser.toLowerCase()) {
		case BrowserConstants.CHROME: {
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--window-size=1366,768");
			if (useGrid) {
				DesiredCapabilities capabilities = new DesiredCapabilities();
				// capabilities.setCapability("zal:tz", "Europe/Berlin");

				capabilities.setCapability("idleTimeout", 600);
				capabilities.setCapability("browserConnectionEnabled", true);
				capabilities.setCapability("javascriptEnabled", true);
				capabilities.setCapability("timeoutInSeconds", 600);
				capabilities.setCapability("keep_alive", true);
				driver = getRemoteDriver(options, scenario);
			} else {
				options.setHeadless(System.getProperty("headless", "false").equals("true"));
				ChromeDriverService service = new ChromeDriverService.Builder()
						.usingDriverExecutable(new File(driverPath)).usingAnyFreePort().build();
				driver = new ChromeDriver(service, options);
			}
			break;
		}
		case BrowserConstants.FIREFOX: {
			FirefoxOptions options = new FirefoxOptions();
			FirefoxProfile profile = new FirefoxProfile();
			profile.setPreference("browser.download.folderList", 2);
			profile.setPreference("browser.download.manager.showWhenStarting", false);
			profile.setPreference("browser.helperApps.alwaysAsk.force", false);
			profile.setPreference("browser.download.manager.showWhenStarting", false);
			profile.setPreference("pdfjs.disabled", true);
			options.setProfile(profile);
			if (useGrid) {
				driver = getRemoteDriver(options, scenario);
			} else {
				options.addArguments("--headless");
				options.setBinary(driverPath);
				driver = new FirefoxDriver(options);
			}
			break;
		}
		}
		assert driver != null;
		driver.manage().deleteAllCookies();
		return driver;
	}

	/**
	 * This method is to get the Application under test url
	 */
	private static void getApplicationUrl() {
		// String target = System.getProperty("target");
		String environment = System.getProperty("environment");
		String application = System.getProperty("application");
		// if (target.equalsIgnoreCase(BrowserConstants.ENG)) {
		switch (application.toUpperCase()) {
		case "PHPTRAVELS":
			// applicationUrl = System.getProperty("url");
			switch (environment) {
			case "PRD":
				engineEnvironment = BrowserConstants.ENV_DEV;
				applicationUrl = BrowserConstants.PHP_PRD_URL;
				break;
			case "TST":
				engineEnvironment = BrowserConstants.ENV_TST;
				applicationUrl = BrowserConstants.PHP_QA_TST_URL;
				break;
			case "STG":
				engineEnvironment = BrowserConstants.ENV_STG;
				applicationUrl = BrowserConstants.PHP_STG_URL;
				break;
			default:
				applicationUrl = BrowserConstants.PHP_PRD_URL;
				break;
			}
			break;
		}
	}
}
