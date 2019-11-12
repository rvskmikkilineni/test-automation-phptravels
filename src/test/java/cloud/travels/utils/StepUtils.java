package cloud.travels.utils;

import java.util.Map;


import cucumber.api.DataTable;

public class StepUtils {

	/**
	 * This method is used to get Map from the datatable passed from Cucumber 
	 * @param dataTable
	 * @return Map<String, String>
	 */
	protected Map<String, String> getDataAsMap(DataTable dataTable) {
		Map<String, String> dataMap = dataTable.asMap(String.class, String.class);
		return dataMap;
	}

	
}
