'use strict';

kikkeriApp.factory('TournamentsModel', function(TournamentsRsc) {
	var model = new function() {
		
		this.tournaments = [];
		this.refresh = function () {

			TournamentsRsc.get(function(result) {
				model.tournaments = result;
			}, function(error) {
				console.log(error);
			});
			
		}
	}

	return model;
});

function TournamentsCtrl($scope, $location, TournamentsModel, TournamentsRsc) {
	$scope.tournamentsModel = TournamentsModel;
	$scope.tournamentsModel.refresh();

	$scope.tournamentInformation = function(tournamentId) {
		$location.path('/tournament/' + tournamentId);
	}

	$scope.createNewTournament = function() {
		var tournament = {};

		var SERIES = {
			periods: 2,
			pointsForWin: 2,
			pointsForLoss: 0,
			pointsForEven: 1
		}

		var configurations = {};
		configurations.SERIES = SERIES;

		
		tournament.name = "kikkeritournee";
		tournament.configurations = configurations;

		TournamentsRsc.post(tournament, function(result) {
			$scope.tournamentsModel.refresh();
		}, function(error) {
			console.log(error);
		});
	}
    
}

