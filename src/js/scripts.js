var myApp = angular.module('app', ['angular.filter']);

myApp.controller('MainController', ['$scope', '$timeout', function MainController($scope, $timeout) {
  $scope.mezzanineIsOpen = false;
  $scope.mezzanineContent = '';

  let body = document.querySelectorAll('body')[0];

  $scope.showDetails = function (groupId, n) {
    let elementToScroll = document.getElementById(groupId);
    $scope.mezzanineIsOpen = true;

    $timeout(function() {
      scrollTo(body, elementToScroll, 300)  
    }, 400);
    
    $scope.mezzanineContent = groupId + '-' + n;
  };

  $scope.closeDetails = function (groupId) {
    let elementToScroll = document.getElementById(groupId);
    $scope.mezzanineIsOpen = false;

    $timeout(function() {
      scrollTo(body, elementToScroll, 300)  
    }, 400);

    $timeout(function() {
      $scope.mezzanineContent = '';
    }, 400);
    
  };

  //scroll
  function scrollTo(element, to, duration) {

    var bodyRect = document.body.getBoundingClientRect(),
      elemRect = to.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top;

    var start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
      change = offset - start - 25,
      currentTime = 0,
      increment = 10;

    var animateScroll = function () {
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      // element.scrollTop = val;
      window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

}]);

myApp.controller('HeaderController', ['$scope', function ($scope) {
  let birthday = new Date(1989, 02, 06);
  let ageCalc = (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  $scope.age = ageCalc(birthday);
  $scope.name = 'Renan Zózimo';
  $scope.description = `Cristão, casado, ${$scope.age} anos`
}]);

myApp.controller('SkillsController', ['$scope', function ($scope) {
  $scope.stars = [1, 2, 3, 4, 5];
  $scope.skills = [{
      'name': 'Interfaces',
      'lvl': 4,
      'expect': 5,
      'xp': 4,
      'type': 'Design'
    },
    {
      'name': 'Icones',
      'lvl': 4,
      'expect': 5,
      'xp': 5,
      'type': 'Design'
    },
    {
      'name': 'Apps Android e IOS',
      'lvl': 4,
      'expect': 5,
      'xp': 5,
      'type': 'Design'
    },
    {
      'name': 'Soluções responsivas',
      'lvl': 4,
      'expect': 5,
      'xp': 5,
      'type': 'Design'
    },
    {
      'name': 'Hotsites',
      'lvl': 2,
      'expect': 4,
      'xp': 3,
      'type': 'Design'
    },
    {
      'name': 'CSS',
      'lvl': 4,
      'expect': 5,
      'xp': 5,
      'type': 'Front'
    },
    {
      'name': 'HTML',
      'lvl': 4,
      'expect': 5,
      'xp': 5,
      'type': 'Front'
    },
    {
      'name': 'JS',
      'lvl': 3,
      'expect': 5,
      'xp': 4,
      'type': 'Front'
    },
    {
      'name': 'AngularJS',
      'lvl': 3,
      'expect': 4,
      'xp': 4,
      'type': 'Front'
    },
    {
      'name': 'ReactJS',
      'lvl': 2,
      'expect': 4,
      'xp': 3,
      'type': 'Front'
    },
    {
      'name': 'Redux + ReactJS',
      'lvl': 1,
      'expect': 4,
      'xp': 2,
      'type': 'Front'
    },
    {
      'name': 'NodeJS',
      'lvl': 1,
      'expect': 3,
      'xp': 2,
      'type': 'Front'
    },
    {
      'name': 'Protótipos HTML/CSS/JS interativos',
      'lvl': 4,
      'expect': 5,
      'xp': 5,
      'type': 'UX'
    },
    {
      'name': 'Protótipos em papel',
      'lvl': 4,
      'expect': 5,
      'xp': 4,
      'type': 'UX'
    },
    {
      'name': 'Axure',
      'lvl': 3,
      'expect': 5,
      'xp': 3,
      'type': 'UX'
    },
    {
      'name': 'Adobe XD',
      'lvl': 4,
      'expect': 5,
      'xp': 3,
      'type': 'UX'
    },
    {
      'name': 'Skecth *',
      'lvl': 1,
      'expect': 5,
      'xp': 0,
      'type': 'UX'
    },
    {
      'name': 'Illustrator',
      'lvl': 4,
      'expect': 5,
      'xp': 5,
      'type': 'Softwares p/ Criação'
    },
    {
      'name': 'Photoshop',
      'lvl': 3,
      'expect': 4,
      'xp': 5,
      'type': 'Softwares p/ Criação'
    },
    {
      'name': 'After Effects',
      'lvl': 1,
      'expect': 5,
      'xp': 2,
      'type': 'Softwares p/ Criação'
    },
    {
      'name': 'Google Design Sprint',
      'lvl': 4,
      'expect': 5,
      'xp': 3,
      'type': 'Processos'
    },
    {
      'name': 'Git',
      'lvl': 3,
      'expect': 5,
      'xp': 5,
      'type': 'Processos'
    },
    {
      'name': 'Scrum',
      'lvl': 3,
      'expect': 4,
      'xp': 4,
      'type': 'Processos'
    },
    {
      'name': 'Liderança de pequenos grupos',
      'lvl': 3,
      'expect': 5,
      'xp': 5,
      'type': 'Outros'
    },
    {
      'name': 'Organização de atividades em grupo',
      'lvl': 3,
      'expect': 5,
      'xp': 5,
      'type': 'Outros'
    },
    {
      'name': 'FIFA 13 - 18',
      'lvl': 5,
      'expect': 3,
      'xp': 4,
      'type': '+ Bônus'
    },
    {
      'name': 'Só essa última alteraçãozinha',
      'lvl': 5,
      'expect': 5,
      'xp': 5,
      'type': '+ Bônus'
    },
    {
      'name': 'Eu programo e você deixa bonito',
      'lvl': 5,
      'expect': 5,
      'xp': 5,
      'type': '+ Bônus'
    },
    {
      'name': 'Trocadilhos infâmes',
      'lvl': 3,
      'expect': 5,
      'xp': 4,
      'type': '+ Bônus'
    }

  ];

  $scope.propertyName = 'xp';
  $scope.reverse = true;

  $scope.sortBy = function (propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : true;
    $scope.propertyName = propertyName;
  };
}]);

myApp.filter('reverse', function () {
  return function (items) {
    return items.slice().reverse();
  };
});