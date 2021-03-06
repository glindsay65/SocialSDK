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
package demo;

import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;

import com.ibm.commons.runtime.util.UrlUtil;
import com.ibm.sbt.playground.assets.CategoryNode;
import com.ibm.sbt.playground.assets.jssnippets.JSSnippetAssetNode;


/**
 * Definition of a JavaScript code snippet.
 */
public class DemoJSSnippetNode extends JSSnippetAssetNode {

	public DemoJSSnippetNode(CategoryNode parent, String name) {
		super(parent,name);
	}

	public String getUrl(HttpServletRequest request) {
		String unid = getUnid();
		return UrlUtil.getRequestUrl(request,3)+"?snippet="+URLEncoder.encode(unid);
	}
}
