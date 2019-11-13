package cloud.travels.runner;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
 
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
    features = {"src/test/resources/features"},
      		format = { "pretty", "html:Reports/cukes", "json:Reports/cukes/cucumber.json",
	"junit:Reports/cukes/junit.xml" },
    monochrome = false,
    tags = {"@healthcheck"},
  
    glue = { "cloud.travels.utils","cloud.travels.steps" })
public class Runner {
	
	@BeforeClass
	public static void setUp() {
		System.setProperty("browser", System.getProperty("browser", "chrome"));
		System.setProperty("pathToDriver", System.getProperty("pathToDriver", "drivers/chromedriver.exe"));
		System.setProperty("foreground", System.getProperty("foreground", "false"));
		System.setProperty("environment", System.getProperty("environment", "TST"));
		System.setProperty("application", System.getProperty("application", "PHPTRAVELS"));
		//System.setProperty("url", System.getProperty("url", "https://phptravels.net/"));
		System.setProperty("seleniumGridUrl", System.getProperty("seleniumGridUrl", "none"));
		System.setProperty("headless", "false");
	}
}