/**
 * Create a Backpack object.
 */

 const backpack = {
    name: "Everyday Backpack", //separated by comma
    volume: 30,
    color: "grey", //only contain letters, digits, dollar signs, underscore
    pocketNum: 15,
    strapLength: { //camelCase property names avoid issues
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  

  console.log("The backpack object:", backpack);
  console.log("The pocketNum value:", backpack.pocketNum); //dot notation - most common
  console.log("The strapLength Left value:", backpack.strapLength.left);