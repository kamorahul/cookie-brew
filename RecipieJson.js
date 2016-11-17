module.exports =  {
    cookieUser : {
        "containers": [
            {
                "container_id": "widget",
                "container_context": {
                    "properties": {
                        "elements" : [{
                            "element_type" : "img",
                            "element_data" : "http://s3.amazonaws.com/chatslashn/launcher.png",
                            "element_id" : "betaout_image",
                            "element_class" : "bout-launcher__img"
                        }]
                    },
                    "actions":[
                        {
                            "element_id" : "betaout_image",
                            "action_type": "onclick",
                            "action_impact": "function",
                            "action_data": "activateChat"
                        }
                    ]
                }
            },
            {
                "container_id": "chatapp",
                "container_context": {
                    "properties" : {
                        "BoutMessengerChatArea" : true,
                        "BoutMessengerInbox" : false,
                        "BoutTeamMembers" : false,
                        "BoutMessengerUserInfo" : false,
                        "BoutMessengerUserIntro" : false,
                        "BoutMessengerVerifyOtp" : false,
                        "userstate" : {
                            "project_id" : "20000",
                            "uuid" : "57fe4b504600006b00b0a8b4",
                            "email" : "kamo.rahul@gmail.com",
                            "cookie" : true
                        },
                        "default" : "BoutMessengerChatArea"
                    }
                }
            }
        ]
    },
    visitor : {
        "containers": [
            {
                "container_id": "widget",
                "container_context": {
                    "properties": {
                        "elements" : [{
                            "element_type" : "img",
                            "element_data" : "http://s3.amazonaws.com/chatslashn/launcher.png",
                            "element_id" : "betaout_image",
                            "element_class" : "bout-launcher__img"
                        }]
                    },
                    "actions":[
                        {
                            "element_id" : "betaout_image",
                            "action_type": "onclick",
                            "action_impact": "function",
                            "action_data": "activateChat"
                        }
                    ]
                }
            },
            {
                "container_id": "chatapp",
                "container_context": {
                    "properties" : {
                        "BoutMessengerChatArea" : true,
                        "BoutMessengerInbox" : false,
                        "BoutTeamMembers" : false,
                        "BoutMessengerUserInfo" : true,
                        "BoutMessengerUserIntro" : false,
                        "BoutMessengerVerifyOtp" : true,
                        "userstate" : {
                            "project_id" : "20000",
                        },
                        "default" : "BoutMessengerUserInfo"
                    }
                }
            }
        ]
    }
}
