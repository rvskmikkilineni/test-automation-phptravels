package cloud.travels.utils;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import cloud.travels.constants.common.DataConstants;



public class TestDataUtils {
	public static int randomNumber;
	public static String uniqueRegisterFirstName;
	public static String uniqueRegisterLastName;
	public static String firstRegisterAccount;
	public static String secondRegisterAccount;
	public static String uniqueAdultName; 
	public static String uniqueFirstName;
	public static String uniqueMiddleName;
	public static String uniqueLastName;
	public static String uniquePassword;
	
		
	/**
	 * This method is to generate a 4 digit random number
	 * @return
	 */
	public static long  getRandomNumbers()
	  {
		Random rand = new Random(); 
		  randomNumber = rand.nextInt(9999);
		  System.out.println(randomNumber);
		return randomNumber;
	  }
	
	/**
	 * This method is to generate a random string with 5 characters
	 * @return
	 */
	public static String randomIdentifier() {
		final String lexicon = "abcdefghijklmnopqrstuvwxyz123456789";
		final java.util.Random rand = new java.util.Random();
		final Set<String> identifiers = new HashSet<String>();
		StringBuilder builder = new StringBuilder();
		String randomValue=null;
		while (builder.toString().length() == 0) {
			int length = rand.nextInt(5) + 5;
			for (int i = 0; i < length; i++) {
				builder.append(lexicon.charAt(rand.nextInt(lexicon.length())));
			}
			if (identifiers.contains(builder.toString())) {
				builder = new StringBuilder();
			}
			 randomValue =builder.toString();
		}
		return randomValue;
	}
	
	
	/**
	 * This method is used to get unique password
	 * 
	 * @return String
	 */
	public static String getUniquePassword() {
		uniquePassword = DataConstants.NEW_NAME + randomIdentifier();
		System.out.println("uniquePassword: " + uniquePassword);
		return uniquePassword;
	}
	
	/**
	 * This method is used to get unique name for the user during register first name
	 * 
	 * @return String
	 */
	public static String getUniqueRegisterFirstName() {
		uniqueRegisterFirstName = DataConstants.NEW_NAME + randomIdentifier();
		System.out.println("uniqueRegisterFirstName: " + uniqueRegisterFirstName);
		return uniqueRegisterFirstName;
	}
	/**
	 * This method is used to get unique name for the user during register Last name
	 * 
	 * @return String
	 */
	public static String getUniqueRegisterLastName() {
		uniqueRegisterLastName = DataConstants.NEW_NAME + randomIdentifier();
		System.out.println("uniqueRegisterLastName: " + uniqueRegisterLastName);
		return uniqueRegisterLastName;
	}
	
	/**
	 * This method is used to get unique display name for the user during
	 * account creation
	 * 
	 * @return String
	 */
	public static String getUniqueEmailId() {
		String strEmailId = DataConstants.NEW_ACCOUNT_EMAIL;
		getRandomNumbers();
		System.out.println("randomNumber:"+randomNumber);
		StringBuilder strBuilderEmailId = new StringBuilder(strEmailId);
		String uniqueEmailId = (strBuilderEmailId.insert(strEmailId.indexOf("@"), "+" +randomNumber)).toString();
		System.out.println("uniqueEmailId: " + uniqueEmailId);
		return uniqueEmailId;
	}

	
}
