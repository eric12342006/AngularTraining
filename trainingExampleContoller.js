"use strict";
app.run(function ($rootScope, $log, Security) {
	//Security.GoToMenuIfSessionExists();
	Security.RequiresAuthorization();
});

app.controller('trainingExampleController', ['$scope', '$element', 'Security', 'DataAdapter', 'MessageService', 'LockManager', function ($scope, $element, Security, DataAdapter, MessageService, LockManager) {
	var url = Security.GetServerHost();
	$scope.StaffID = 0;
	function Initialize(){

	}
	
	$scope.Add = function(){
		$scope.StaffID++;
	}
	
	$scope.PrintScope = function(){
		console.log($scope)
	}
	
	//$scope.CustomGetDataResult = function (data_or_JqXHR, textStatus, jqXHR_or_errorThrown, scope, element, attrs, ctrl) {
	//	element.$$element.prev('div').prev('div').find('button').attr("disabled", false);
	//}
	//
	//$scope.CustomSelectedToRecord = function(sRecord, rowScope, scope, iElement, controller){
	//	console.log("<"+iElement[0].tagName+">" +" Directive overried CustomPointedToRecord()");
	//	//$scope.directiveDict["he01sm"].criteriaObj = sRecord;
	//	//$scope.directiveDict["he01sm"].FindData(sRecord);
	//}
	//
	//$scope.RefreshInquiry = function(){
    //
	//}
	//
	//
	/////Init Data Table
    //function initDataTable() {
    //    var curDataTable = $('#dataTable').DataTable({
    //        columns: [
    //            { "data": 'StaffID', title: 'Staff ID', "width": "10%" },
    //            { "data": 'FullName', title: 'Full Name', "width": "10%" },
    //            { "data": 'ChineseName', title: 'Chinese Name', "width": "10%" },
    //            { "data": 'DepartmentCode', title: 'Department Code' },
	//			{ "data": 'DepartmentDesc', title: 'Department Description' },
	//			{ "data": 'LeaveType', title: "Leave Type", "width": "10%"},
	//			{ "data": 'LeaveBalance', title: "Opening Balance", "width": "10%" },
	//			{ "data": 'Adjustment', title: "Adjustment", "width": "10%" },
	//			{ "data": 'Entitlement', title: "Entitlement", "width": "10%" },
	//			{ "data": 'PendingToBeApproved', title: "Pending", "width": "10%" },
	//			{ "data": 'ApprovedLeave', title: "Approved Leave", "width": "10%" },
	//			{ "data": 'Expired', title: "Expired", "width": "10%" },
	//			{ "data": 'AvailableBalance', title: "Available Balance", "width": "10%" }
    //        ],
    //        dom: 'ilfrtp',
    //        /*"columnDefs": [
    //          { "visible": false, "targets": 3 },
	//          { "visible": false, "targets": 4 },
	//          { "visible": false, "targets": 5 }
    //        ],*/
    //        "order": [[ 0, "asc" ]],
    //        "displayLength": 10,
    //        /*"drawCallback": function (settings) {
    //            var api = this.api();
    //            var rows = api.rows({ page: 'current' }).nodes();
    //            var last = null;
    //
    //            api.column(3, { page: 'current' }).data().each(function (group, i) {
    //                if (last !== group) {
    //                    $(rows).eq(i).before(
    //                        '<tr class="group"><td colspan="10">' +
    //                        ///Staff ID + Full Name + Chinese Name + Department Code
    //                        //group + ' - ' + api.column(1, { page: 'current' }).data()[i] + ' ' + api.column(2, { page: 'current' }).data()[i] + ' - ' + api.column(3, { page: 'current' }).data()[i]
    //                        group + ' - ' + api.column(4, { page: 'current' }).data()[i]
	//						+ '</td></tr>'
    //                    );
    //
    //                    last = group;
    //                }
    //            });
    //        }*/
    //    });
	//	
	//	//Hightlight row function
	//	$('#dataTable tbody').on( 'mouseenter', 'td', function () {
	//		if(curDataTable.cell(this).length === 0)
	//		{
	//			
	//		}else{
	//			var rowIdx = curDataTable.cell(this).index().row;
	//			$( curDataTable.cells().nodes() ).removeClass( 'highlight' );
	//			$( curDataTable.rows(rowIdx).nodes()[0].childNodes ).addClass( 'highlight' );
	//		}
	//	} );
    //};
	//
	/////Refresh Data Table from Get Json
    //function refreshDateTable(items) {
    //    var curDataTable = $('#dataTable').DataTable();
    //    curDataTable.clear();
    //    curDataTable.rows.add(items); // Add new data
    //    curDataTable.columns.adjust().draw(); // Redraw the DataTable
    //};
	
	Initialize();
}]);