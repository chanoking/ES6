const team = {
  members: ["chano", "sonny", "ronaldo", "park"],
  teamName: "Robust",
  Slogan: function () {
    return this.members.map(
      (member) => `${member} is on the ${this.teamName} team`
    );
  },
};

const slogan = team.Slogan();
console.log(slogan);
