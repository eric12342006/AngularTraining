// JavaScript Document
"use strict";

app.config(['config',
'$httpProvider',
'$locationProvider',
'$controllerProvider',
'$compileProvider',
'$filterProvider',
'$provide',
'$ocLazyLoadProvider',

'$urlRouterProvider',
'$stateProvider',
'$mdDateLocaleProvider',
function(config, $httpProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, $urlRouterProvider, $stateProvider, $mdDateLocaleProvider) {
    config.test = "Keith";
    
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    // $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
    // $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;

    // this is important
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
    // this is important - End
    
    // third-party routing and loading controller before render the template
    /**
     * for more details please study 
     * https://oclazyload.readme.io/docs/with-your-router
     * http://www.funnyant.com/angularjs-ui-router/
     * https://github.com/ocombe/ocLazyLoad/issues/182
     */
    $urlRouterProvider
    // redirect
    // .when('/legacy-route', {
    //  redirectTo: '/'
    // })
    .otherwise('/Home');

    var templateState = {
		name: "Home.pageName",
		url: "/urlName", 		// root route
		views: {
			"content@": {
				templateUrl: '../template.html',
				controller: 'templateCtrl'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/AppCtrl.js');
			}]
		}
    }

    var homeState = {
        name: "Home",
        url: "/Home", // root route
        views: {
            "content": {
                templateUrl: '../ess-home-content-main.html',
            }
        }//,
        // resolve: {
        //  loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        //      return $ocLazyLoad.load('./js/demo.js');
        //  }]
        // }
    }
	
	var administrationState = {
		name: "Home.administration",
		url: "/administration",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-administration.html',
				controller: 'EAdministrationCtrl'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/administrationStateController.js');
			}]
		}
	}
	
	var usergenerationState = {
		name: "Home.userGeneration",
		url: "/userGeneration",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-usergeneration.html',
				controller: 'staffInquiryCtrl'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/userGenerationStateController.js');
			}]
		}
	}
	
	var ebmessageState = {
		name: "Home.EBmessage",
		url: "/EBmessage",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-EBmessage.html',
				controller: 'postedDateInquiryCtrl'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/EBmessageStateController.js');
			}]
		}
	}

	var departmentState = {
		name: "Home.department",
		url: "/department",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-department.html',
				controller: 'employeeOrganizationCtrl'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/departmentStateController.js');
			}]
		}
	}
	
	var calendarState = {
		name: "Home.calendar",
		url: "/calendar",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-calendar.html',
				controller: 'createLeaveAppController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/calendarStateController.js');
			}]
		}
	}
		
	var essprofileState = {
		name: "Home.essprofile",
		url: "/essprofile",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-essprofile.html'
			}
		}
	}

	var leaveappchecklistState = {
		name: "Home.leaveappchecklist",
		url: "/leaveappchecklist",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-leaveappchecklist.html',
				controller: 'checkListInquiryCtrl'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/leaveappchecklistStateController.js');
			}]
		}
	}	
	
	var cancellationState = {
		name: "Home.cancellation",
		url: "/cancellation",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-cancellation.html',
				controller: 'cancellationCtrl'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/cancellationStateController.js');
			}]
		}
	}
	
	var userpasswordState = {
		name: "Home.userpassword",
		url: "/userpassword",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-userpassword.html',
				controller: 'userpasswordCtrl'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/userpasswordStateController.js');
			}]
		}
	}
	
	///20180521
	///For robbie testing only
	var leavereportState = {
		name: "Home.leavereport",
		url: "/leavereport",
		views: {
			"content@": {
				templateUrl: '../leavereport.html',
				controller: 'LeaveReportController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/leavereportController.js');
			}]
		}
	}

	var subleavereportState = {
		name: "Home.subleavereport",
		url: "/subleavereport",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-subleavereport.html',
				controller: 'SubLeaveReportController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/subleavereportController.js');
			}]
		}
	}
	
		///20180521
	///For k testing only
	var logictableState = {
		name: "Home.logictable",
		url: "/logictable",
		views: {
			"content@": {
				templateUrl: '../logictable.html',
				controller: 'logictableController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/LogicTable.controller.js');
			}]
		}
	}
	
	var staffdashboardState = {
		name: "Home.staffdashboard",
		url: "/staffdashboard",
		views: {
			"content@": {
				templateUrl: '../staffdashboard.html',
				controller: 'staffdashboardController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/staffdashboard.controller.js');
			}]
		}
	}
	
	var delegationState = {
		name: "Home.delegation",
		url: "/delegation",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-delegation.html',
				controller: 'delegationController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/delegationStateController.js');
			}]
		}
	}
	
	var delegationhistoryState = {
		name: "Home.delegationhistory",
		url: "/delegationhistory",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-delegationhistory.html',
				controller: 'delegationHistoryController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/delegationHistoryStateController.js');
			}]
		}
	}
	
	var leavebalanceState = {
		name: "Home.leavebalance",
		url: "/leavebalance",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-leavebalance.html',
				controller: 'leaveBalanceController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/leaveBalanceStateController.js');
			}]
		}
	}
	
	var subleavebalanceState = {
		name: "Home.subleavebalance",
		url: "/subleavebalance",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-subleavebalance.html',
				controller: 'subLeaveBalanceController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/subLeaveBalanceStateController.js');
			}]
		}
	}
		
	var salarypayslipState = {
		name: "Home.salarypayslip",
		url: "/salarypayslip",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-salarypayslip.html',
				controller: 'subLeaveBalanceController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/salaryPaySlipStateController.js');
			}]
		}
	}
	
	var IR56BFormState = {
		name: "Home.IR56BForm",
		url: "/IR56BForm",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-IR56BForm.html',
				controller: 'IR56BFormController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/IR56BFormController.js');
			}]
		}
	}	
	
	var contactupdateState = {
		name: "Home.contactupdate",
		url: "/contactupdate",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-contactupdate.html',
				controller: 'contactupdateController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/contactupdateStateController.js');
			}]
		}
	}
	
	var contactupdateapprovalState = {
		name: "Home.contactupdateapproval",
		url: "/contactupdateapproval",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-contactupdateapproval.html',
				controller: 'contactupdateapprovalController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/contactUpdateApprovalStateController.js');
			}]
		}
	}
	
	var contactupdatecancelState = {
		name: "Home.contactupdatecancel",
		url: "/contactupdatecancel",
		views: {
			"content@": {
				templateUrl: '../ess-home-content-contactupdatecancel.html',
				controller: 'contactUpdateCancelController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/contactUpdateCancelStateController.js');
			}]
		}
	}
	
    var trainingExampleState = {
		name: "Home.trainingExample",
		url: "/trainingExample",
		views: {
			"content@": {
				templateUrl: '../training-example.html',
				controller: 'trainingExampleController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/trainingExampleContoller.js');
			}]
		}
	}
	var menuExampleState = {
		name: "Home.menuExample",
		url: "/menuExample",
		views: {
			"content@": {
				templateUrl: '../menu-example.html',
				controller: 'menuExampleController'
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('../js/controller/menuExampleContoller.js');
			}]
		}
    }
	
    $stateProvider.state(homeState);
	$stateProvider.state(administrationState);
	$stateProvider.state(usergenerationState);
	$stateProvider.state(ebmessageState);
	$stateProvider.state(departmentState);
	$stateProvider.state(calendarState);
	$stateProvider.state(essprofileState);
	$stateProvider.state(leaveappchecklistState);
	$stateProvider.state(cancellationState);
	$stateProvider.state(userpasswordState);
	$stateProvider.state(leavereportState);
	$stateProvider.state(subleavereportState);
	$stateProvider.state(logictableState);
	$stateProvider.state(staffdashboardState);
	$stateProvider.state(delegationState);
	$stateProvider.state(leavebalanceState);
	$stateProvider.state(subleavebalanceState);
	$stateProvider.state(delegationhistoryState);
	$stateProvider.state(salarypayslipState);
	$stateProvider.state(IR56BFormState);
	$stateProvider.state(contactupdateState);
	$stateProvider.state(contactupdateapprovalState);
	$stateProvider.state(contactupdatecancelState);
	$stateProvider.state(trainingExampleState);
	$stateProvider.state(menuExampleState);

	$mdDateLocaleProvider.formatDate = function(date) {
		var tempDate = moment(date);
		return (tempDate.isValid() ? tempDate.format('YYYY-MM-DD') : '');
	};
}]);