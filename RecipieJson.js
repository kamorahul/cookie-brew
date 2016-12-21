/**
 * Created by rahul on 17/11/16.
 */

var launcher = {
    "launch" : {
        "elements" : [{
            "element_type" : "img",
            "element_data" : "http://s3.amazonaws.com/chatslashn/launcher.png",
            "element_id" : "betaout_image",
            "element_class" : "bout-launcher__img"
        }],
        class : "bout-launcher"
    },
    "floater" :{
        "elements" : [{
            "element_type" : "img",
            "element_data" : "images/mickey.png",
            "element_id" : "betaout_image",
            "element_class" : "bout-floater__img"
        },{
            "element_type" : "div",
            "element_data" : "Over 100 local and international brands curated just for you",
            "element_id" : "",
            "element_class" : "bout-floater__text",

        },
            {
                "element_type" : "link",
                "element_data" : {
                    href : "#" ,
                    display : "HAVE A LOOK"
                },
                "element_id" : "",
                "element_class" : "bout-floater__button"
            } ],
        class : "bout-floater"
    },
    greeter : {
        elements : [{

            "element_type" : "img",
            "element_data" : "images/mickey.png",
            "element_id" : "betaout_image",
            "element_class" : "bout-greeter__img"

        },
            {
                "element_type" : "div",
                "element_data" : "",
                "element_id" : "",
                "element_class" : "bout-greeter__body",
                "child" : [
                    {
                        "element_type" : "div",
                        "element_data" : "Over 100 local and international brands curated just for you",
                        "element_id" : "",
                        "element_class" : "bout-greeter__text",
                    },
                    {
                        "element_type" : "span",
                        "element_data" : "",
                        "element_id" : "",
                        "element_class" : "bout-greeter__divider"
                    },
                    {
                        "element_type" : "div",
                        "element_data" : "",
                        "element_id" : "",
                        "element_class" : "bout-greeter__about",
                        child : [
                            {
                                "element_type" : "span",
                                "element_data" : "Mickie",
                                "element_id" : "",
                                "element_class" : "bout-greeter__name"
                            },
                            {
                                "element_type" : "span",
                                "element_data" : "Personal Stylist",
                                "element_id" : "",
                                "element_class" : "bout-greeter__designation"
                            }
                        ]
                    }

                ]
            },
            {
                "element_type" : "div",
                "element_data" : "&#215;",
                "element_id" : "",
                "element_class" : "bout-greeter__close"
            },
            {
                "element_type" : "div",
                "element_data" : "3",
                "element_id" : "",
                "element_class" : "bout-greeter__notification"
            },

        ],
        class : "bout-greeter"
    }
}
module.exports = {
    CookieUser : {
        "containers": [
            {
                "container_id": "widget",
                "container_context": {
                    "properties": launcher.greeter,
                    "actions":[
                        {
                            "element_id" : "betaout_action",
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
                        "BoutMessengerInbox" : true,
                        "BoutTeamMembers" : true,
                        "BoutMessengerUserInfo" : true,
                        "BoutMessengerUserIntro" : true,
                        "BoutMessengerVerifyOtp" : true,
                        "userstate" : {
                            "project_id" : "20000",
                            "uuid" : "57fe4b504600006b00b0a8b4",
                            "email" : "kamo.rahul@gmail.com",
                            "cookie" : true
                        },
                        "default" : "BoutMessengerInbox"
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
                    "properties": launcher.floater,
                    "actions":[
                        {
                            "element_id" : "betaout_action",
                            "action_type": "onmouseover",
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
                        "BoutMessengerInbox" : true,
                        "BoutTeamMembers" : true,
                        "BoutMessengerUserInfo" : true,
                        "BoutMessengerUserIntro" : true,
                        "BoutMessengerVerifyOtp" : true,
                        "userstate" : {
                            "project_id" : "20000",
                            "campaign_id" : "",
                            "agent_id" : "34j23jg23413jh1234g23j4h123jh",
                            "content" : "Over 100 local and international brands curated just for you"
                        },
                        "default" : "BoutMessengerChatArea",
                        "banner_type" : "floater"
                    }
                }
            }
        ]
    }
}


