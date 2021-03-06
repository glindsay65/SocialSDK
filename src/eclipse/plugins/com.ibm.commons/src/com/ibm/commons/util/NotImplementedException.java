/*
 * � Copyright IBM Corp. 2012-2013
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

package com.ibm.commons.util;



/**
 * Exception thrown by a method that is not implemented.
 * @ibm-api
 */
public class NotImplementedException extends AbstractRuntimeException {

	private static final long serialVersionUID = 1L;

	/**
     * Create a new exception.
     * The message is formatted using the StringUtil.format rules.
     * @param msg the exception message
     * @param params the parameter values to format
     * @ibm-api
     */
    public NotImplementedException() {
        super(null,"Not implemented",(Object[])null); //$NON-NLS-1$
    }
    
	/**
     * Create a new exception.
     * The message is formatted using the StringUtil.format rules.
     * @param msg the exception message
     * @param params the parameter values to format
     * @ibm-api
     */
    public NotImplementedException(String msg, Object... params) {
        super(null,msg,params);
    }
}
