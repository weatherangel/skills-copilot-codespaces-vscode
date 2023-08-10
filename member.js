function skillsMember() {
      return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'templates/member.html',
    controller: "SkillsMemberController",
    ControllerAs: "vm",
    bindToController: true,
    scope: {
        member: '='
    }
  };
}