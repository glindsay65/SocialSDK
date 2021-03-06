/*
 * � Copyright IBM Corp. 2012
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package com.ibm.sbt.smartcloud.portlet.sample;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import com.ibm.sbt.portlet.GenericSBTPortlet;

/**
 * A sample portlet
 */
public class SmartCloudProfilePortlet extends GenericSBTPortlet {

	public static final String JSP_FOLDER    = "/_portlets/";
	public static final String VIEW_JSP      = "SmartCloudProfilePortletView.jsp";

	/**
	 * @see javax.portlet.Portlet#init()
	 */
	@Override
	public void init() throws PortletException{
		super.init();
	}

	@Override
	protected String[] getVariableNames() {
		return VARS;
	}
	private static String[] VARS = new String[] {"UserID"};

	@Override
	protected String getResourcePath(RenderRequest request) {
		return JSP_FOLDER + VIEW_JSP;
	}
}
