# test-automation-phptravels

Reason to use Selenium with Cucumber:
------------------------------------

Cucumber is a testing approach (or a Framework) which supports Behavior Driven Development (BDD). It explains the behavior of the application in a simple English text using Gherkin language. BDD is useful for communicating with every member of a cross-functional product team and sharing expected behaviors across all members of the team. 

I felt this would be better approach for building the automation framework. As mentioned above, anyone from project team can simply understand each and every automation test without a need of looking at the code.

Tools & Versions Used:-
-----------------------------

selenium	: 3.141.59
jUnit		: 4.12

Cucumber-
gherkin				: 2.12.2
cucumber-jvm-deps	: 1.0.5
cucumber-junit		: 1.2.5
cucumber-core		: 1.2.5

Steps/Process to execute:
-------------------------
1. Download the project from the attachment and Import in eclipse workspace or any IDE (Alternatively this can also be downloaded from my git handle - https://github.com/rvskmikkilineni/test-automation-phptravels.git)
2. Navigate to runner file (test-automation-phpTravels/src/test/java/cloud/travels/runner/Runner.java)
3. In order to start execution of all the tests simply keep the path in features as below.
	features = {"src/test/resources/features"}
4. If need to specifically execute any one of the Tests from total of 3 (homePage, loginPage, userRegistration), just mention the required feature name at the end of the path as below
	features ={"src/test/resources/features/homePage.feature"} [or]
	features ={"src/test/resources/features/loginPage.feature"} [or]
	features ={"src/test/resources/features/userRegistration.feature"}
5. All the scenarios inside each feature file has a tag (@healthcheck), this is to execute specific tests with tag name as @heathcheck
6. If needed to execute any specific test add any unique tag (Ex: @healthcheck1) for that partuclar scenario in feature file and mention the same in runner file as below. This time only the scripts with tag name as @healthcheck1 will get executed.
	tags = {"@healthcheck1"}
7. By default the script runs on chrome browser, if needed to change the browser, place the respective driver.exe file under drivers folder and update below code in runner file.
	System.setProperty("browser", System.getProperty("browser", "chrome"));
	System.setProperty("pathToDriver", System.getProperty("pathToDriver", "drivers/chromedriver.exe"));
8. If need to execute the whole tests on headless browser just update the property to "true" as below in runner file
	System.setProperty("headless", "true");
9. To view the execution report after the tests have been executed, just open the cmd prompt and navigate to the project location. Execute below command on cmd prompt and the reports will get opened.
	>node glupfile.js

Steps/Process to execute on Zelenium Grid:
------------------------------------------

I have used Zalenium Grid to run multiple tests across different browser instances at once and this needs docker to be installed

1.Install docker for windows
2.Go to docker workspace(Ex:C:\Program Files\Docker\Docker\resources\bin) and excute below two commands in command prompt.
	docker pull elgalu/selenium
	docker pull dosel/zalenium
	**Above commands take approximately 5 to 10 min of time
3.Then execute below zalenium commands, copy all the below 5 commands at once and paste in same command prompt
	docker run --rm -ti --name zalenium -p 4444:4444 ^
    -v /var/run/docker.sock:/var/run/docker.sock ^
    -v /tmp/videos:/home/seluser/videos  ^
	--privileged dosel/zalenium start --timeZone "Asia/Kolkata" ^
	--chromeContainers 5 --firefoxContainers 4 --videoRecordingEnabled true --maxDockerSeleniumContainers 5 --maxTestSessions 20
	**Above 5 commands take approximately 5 min of time
4.Open Chrome browser and enter below Zalenium URL
	http://localhost:4444/grid/admin/live#
5.Update the selenium grid url in Cucumber Runner file as below
	System.setProperty("seleniumGridUrl", System.getProperty("seleniumGridUrl", "http://localhost:4444/wd/hub"))
6.We can also check the recording of all the tests that ran on grid from below url. Paste below url on chrome browser directly.
	http://localhost:4444/dashboard

Issues faced while developing scripts and execution:
----------------------------------------------------

1. Most of the times the AUT is unresponsive or takes very long time to get up and running.
2. Some times 'Page Not Found' screen appears and couldn't do any work till it gets back.
3. The chat window that automatically pops up on homepage sometimes doesn't open at all and manytimes it opens immediately after opening the page and fewtimes it opens somewhere in the middle of our scenario which has thrown challenges in handling this. As of now, due to time constraint this popup is handled only if it pops up immediately after opening the home page.
