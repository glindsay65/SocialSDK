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
/**
 * Social Business Toolkit SDK. Definition of constants for FileService.
 */
define(["sbt/config", "sbt/connections/core"],function(sbt) {
	return sbt.connections.fileConstants = {
		sbtErrorCodes : {
			badRequest : 400
		},
		sbtErrorMessages : {
			null_fileId : "Null file Id",
			null_userId : "Null user Id",
			args_object : "Invalid argument",
			args_comment : "Null Comment",
			args_file : "Invalid file",
			null_file : "Null file",
			null_fileLocation : "Null file path"
		},
		fields : {
			fileId : "FileId",
			userId : "UserId",
			comment : "Comment"
		},
		atom : "application/atom+xml",
		SEPARATOR : '/',
		xPathEntry : "/a:feed/a:entry",
		xpathMapFile : {
			"dwnLink" : "a:link[@rel=\"edit-media\"]/@href",
			"comment" : "a:content",
			"entry" : "/a:entry",
			"uuid" : "td:uuid",
			"lock" : "td:lock/@type",
			"userUuid" : "a:author/snx:userid",
			"name" : "td:label",
			"category" : "a:category/@label",
			"modified" : "td:modified",
			"userState" : "td:modifier/snx:userState",
			"visibility" : "td:visibility",
			"libraryType" : "td:libraryType",
			"versionUuid" : "td:versionUuid",
			"summary" : "a:summary",
			"restrictedVisibility" : "td:restrictedVisibility",
			"title" : "a:title",
			"size" : "td:totalMediaSize",
			"createdDate" : "td:created",

			"published" : "a:published",
			"updated" : "a:updated",
			"lastAccessed" : "td:lastAccessed",
			"libraryId" : "td:libraryId",
			"propagation" : "td:propagation",
			"objectTypeId" : "td:objectTypeId",
		},
		xpathMapComment : {
			"comment" : "a:content"
		},
		xpathMapPerson : {
			"email" : "a:author/a:email",
			"userUuid" : "a:author/snx:userid",
			"nameOfUser" : "a:author/a:name",
			"userState" : "a:author/snx:userState",
			"userStateModifier" : "td:modifier/snx:userState",
			"nameModifier" : "td:modifier/a:name",
			"userUuidModifier" : "td:modifier/snx:userid",
			"emailModifier" : "td:modifier/a:email"
		},
		baseUrl : {
			"FILES" : "/files"
		},
		accessType : {
			"PUBLIC" : "/anonymous/api",
			"AUTHENTICATED" : "/api"
		},
		categories : {
			"PINNED" : "/myfavorites",
			"MYLIBRARY" : "/myuserlibrary"
		},
		filters : {
			"ADDEDTO" : "/addedto",
			"SHARE" : "/share",
			"SHARED" : "/shared",
			"MYSHARES" : "/myshares",
			"COMMENT" : "comment",
			"NULL" : ""
		},
		resultType : {
			"FEED" : "/feed",
			"MEDIA" : "/media",
			"ENTRY" : "/entry",
			"REPORTS" : "/reports",
			"NONCE" : "/nonce",
			"LOCK" : "/lock",
			"NULL" : ""
		},
		views : {
			"FILES" : "/documents",
			"FOLDERS" : "/collections",
			"FOLDER" : "/collection",
			"RECYCLEBIN" : "/view/recyclebin"
		},
		responseFormat : {
			NON_XML_FORMAT : "NON_XML_FORMAT",
			SINGLE : "SINGLE"
		},
		fileRequestParams : {
			removeTag : "removeTag",
			itemId : "itemId",
			visibility : "visibility",
			identifier : "identifier",
			shareWith : "shareWith",
			shareSummary : "shareSummary",
			creator : "creator",
			page : "page",
			ps : "ps",
			sI : "sI",
			includeExtendedAttributes : "includeExtendedAttributes",
			acls : "acls",
			direction : "direction",
			sC : "sC",
			includePath : "includePath",
			includeTags : "includeTags",
			sortBy : "sortBy",
			sortOrder : "sortOrder",
			tag : "tag",
			fileType : "fileType",
			format : "format",
			includeCount : "includeCount",
			access : "access",
			shared : "shared",
			sharedWithMe : "sharedWithMe",
			added : "added",
			addedBy : "addedBy",
			includeQuota : "includeQuota",
			sharePermission : "sharePermission",
			sharedBy : "sharedBy",
			sharedWith : "sharedWith",
			search : "search",
			category : "category",
			inline : "inline",
			includeLibraryInfo : "includeLibraryInfo",
			includeNotification : "includeNotification",
			recommendation : "recommendation",
			versionUuid : "versionUuid", // payload
			restrictedVisibility : "restrictedVisibility", // payload
			lock : "type",
			libraryType : "libraryType",// payload
			email : "email", // payload
			userState : "userState" // payload
		}

	};

});
