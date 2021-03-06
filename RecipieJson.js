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
            "element_id" : "bout_conv_sub",
            "element_class" : "bout-floater__text",

        },
            {
                "element_type" : "link",
                "element_data" : {
                    href : "http://google.com" ,
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
                        "element_id" : "bout_conv_sub",
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
    visitor : {
        "containers": [
            {
                "container_id": "widget",
                "container_context": {
                    "properties": launcher.launch,
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
                        "BoutMessengerUserIntro" : false,
                        "BoutMessengerVerifyOtp" : false,
                        "userstate" : {
                            "project_id" : "1000074",
                        },
                        "default" : "BoutMessengerUserInfo",
                        // "banner_type" : "floater"
                    }
                }
            }
        ]
    },
    CookieUser : {
        "containers": [
            {
                "container_id": "widget",
                "container_context": {
                    "properties": launcher.launch,
                    "actions":[
                        {
                            "element_id" : "betaout_action",
                            "action_type": "onclick",   //greeter "onclick" //floater "onmouseover"
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
                        "BoutMessengerUserIntro" : false,
                        "BoutMessengerVerifyOtp" : false,
                        "BoutMessengerInitiateChat" : true,
                        "userstate" : {
                            "project_id" : "1000074",
                            "campaign_id" : "345fefdsf234f23cf4",
                            "uuid" : "587f5cc755000057003899c2",
                            "email" : "kamo.rahul@gmail.com",
                            "cookie" : true
                        },
                        "default" : "BoutMessengerInbox"
                    }
                }
            }
        ]
    }
}

//  Launcher // user with no data

//visitor : {
// "containers": [
//     {
//         "container_id": "widget",
//         "container_context": {
//             "properties": launcher.launch,
//             "actions":[
//                 {
//                     "element_id" : "betaout_action",
//                     "action_type": "onclick",   //greeter "onclick" //floater "onmouseover"
//                     "action_impact": "function",
//                     "action_data": "activateChat"
//                 }
//             ]
//         }
//     },
//     {
//         "container_id": "chatapp",
//
//         "container_context": {
//             "properties" : {
//                 "BoutMessengerChatArea" : true,
//                 "BoutMessengerInbox" : true,
//                 "BoutTeamMembers" : true,
//                 "BoutMessengerUserInfo" : true,
//                 "BoutMessengerUserIntro" : false,
//                 "BoutMessengerVerifyOtp" : true,
//                 "userstate" : {
//                     "project_id" : "20000",
//                     "campaign_id" : "345fefdsf234f23cf4",
//                     "agent_id" : "34j23jg23413jh1234g23j4h123jh"
//                 },
//                 "default" : "BoutMessengerUserInfo",
//                 "banner_type" : "floater"    //floater
//             }
//         }
//     }
// ]
// }
//

// Greeter Floater //

// visitor : {
//     "containers": [
//         {
//             "container_id": "widget",
//             "container_context": {
//                 "properties": launcher.floater,
//                 "actions":[
//                     {
//                         "element_id" : "betaout_action",
//                         "action_type": "onclick",   //greeter "onclick" //floater "onmouseover"
//                         "action_impact": "function",
//                         "action_data": "activateChat"
//                     }
//                 ]
//             }
//         },
//         {
//             "container_id": "chatapp",
//
//             "container_context": {
//                 "properties" : {
//                     "BoutMessengerChatArea" : true,
//                     "BoutMessengerInbox" : true,
//                     "BoutTeamMembers" : true,
//                     "BoutMessengerUserInfo" : false,
//                     "BoutMessengerUserIntro" : true,
//                     "BoutMessengerVerifyOtp" : true,
//                     "userstate" : {
//                         "project_id" : "20000",
//                         "campaign_id" : "345fefdsf234f23cf4",
//                         "agent_id" : "34j23jg23413jh1234g23j4h123jh"
//                     },
//                     "default" : "BoutMessengerChatArea",
//                     "banner_type" : "floater"    //floater
//                 }
//             }
//         }
//     ]
// }
// }

// Existing User


// visitor : {
//     "containers": [
//         {
//             "container_id": "widget",
//             "container_context": {
//                 "properties": launcher.launch,
//                 "actions":[
//                     {
//                         "element_id" : "betaout_action",
//                         "action_type": "onclick",   //greeter "onclick" //floater "onmouseover"
//                         "action_impact": "function",
//                         "action_data": "activateChat"
//                     }
//                 ]
//             }
//         },
//         {
//             "container_id": "chatapp",
//
//             "container_context": {
//                 "properties" : {
//                     "BoutMessengerChatArea" : true,
//                     "BoutMessengerInbox" : true,
//                     "BoutTeamMembers" : true,
//                     "BoutMessengerUserInfo" : false,
//                     "BoutMessengerUserIntro" : true,
//                     "BoutMessengerVerifyOtp" : true,
//                     "userstate" : {
//                         "project_id" : "20000",
//                         "campaign_id" : "345fefdsf234f23cf4",
//                         "uuid" : "587f5cc755000057003899c2",
//                         "email" : "kamo.rahul@gmail.com",
//                         "cookie" : true
//                     },
//                     "default" : "BoutMessengerInbox"
//                 }
//             }
//         }
//     ]
// }
// }

//Existing user with campaign



