package cloud.travels.utils;

import java.io.IOException;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import cucumber.api.Scenario;
import cucumber.api.java.After;

public class HookUtils {

	/**
	 * This cucumber hook closes the browser after each scenario
	 * 
	 * @throws IOException
	 */
	@After
	public void cleanUp(Scenario scenario) throws IOException {
		Cookie cookie = new Cookie("zaleniumTestPassed", scenario.isFailed() ? "false" : "true");
		BrowserUtils.driver.manage().addCookie(cookie);

		scenario.embed(((TakesScreenshot) BrowserUtils.driver).getScreenshotAs(OutputType.BYTES), "image/png");

		try {

		} catch (Exception e) {

		} finally {
			BrowserUtils.driver.close();
			BrowserUtils.driver.quit();
		}
	}

}
