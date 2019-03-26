const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));
  // parkArticle.appendChild(buildElement("p", undefined, parkObject.latitude));
  // parkArticle.appendChild(buildElement("p", undefined, parkObject.longitude))
  parkArticle.appendChild(buildElement("p", undefined, "Visited: " + parkObject.visited))

  if(parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", undefined, "Visited Park")
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleVisited)
  }

  let editParkButton = buildElement("button", undefined, "Edit Park")
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", handleEdit)

  let deleteParkButton = buildElement("button", undefined, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};

const parkEditForm = (parkObject) => {
  let editFormFragment = document.createDocumentFragment()
  //edit park name feature
  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name))
  //edit park state feature
  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state))
  //edit park latitude feature
  editFormFragment.appendChild(buildElement("label", undefined, "Latitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-lat--${parkObject.id}`, parkObject.latitude))
  //edit park longitude feature
  editFormFragment.appendChild(buildElement("label", undefined, "Longitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-long--${parkObject.id}`, parkObject.longitude))
  //update visited feature
  //visited
  editFormFragment.appendChild(buildElement("label", undefined, "Visited: "))
  let visitedTrueRadioBtn = document.createElement("input");
  visitedTrueRadioBtn.type = "radio";
  visitedTrueRadioBtn.name = "visited";
  visitedTrueRadioBtn.id = `edit-visited--${parkObject.id}`;
  visitedTrueRadioBtn.value = true;
  visitedTrueRadioBtn.checked = true;
  editFormFragment.appendChild(visitedTrueRadioBtn);
  //not visited
  editFormFragment.appendChild(buildElement("label", undefined, "Not Visited: "))
  let visitedFalseRadioBtn = document.createElement("input");
  visitedFalseRadioBtn.type = "radio";
  visitedFalseRadioBtn.name = "visited";
  visitedFalseRadioBtn.value = false;
  visitedFalseRadioBtn.checked = true;
  editFormFragment.appendChild(visitedFalseRadioBtn);

  //update button feature
  const updateParkButton = buildElement("button", undefined, "Update")
  updateParkButton.addEventListener("click", handleUpdate)
  editFormFragment.appendChild(updateParkButton)

  return editFormFragment
}
