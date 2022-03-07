let projects = []

function addProject() {

    let nameProject = document.getElementById('project-input-name').value;
    let startDateProject = document.getElementById('project-input-startdate').value;
    let endDateProject = document.getElementById('project-input-enddate').value;
    let desProject = document.getElementById('project-input-description').value;
    let nodeProject = document.getElementById('project-technologi-nodejs').checked;
    let reactProject = document.getElementById('project-technologi-reactjs').checked;
    let nextProject = document.getElementById('project-technologi-nextjs').checked;
    let scriptProject = document.getElementById('project-technologi-typescript').checked;
    let imageProject = document.getElementById('project-input-uploadimage').files[0];

    imageProject = URL.createObjectURL(imageProject);

    let project = {
        nameProject: nameProject,
        startDateProject: startDateProject,
        endDateProject: endDateProject,
        desProject: desProject,
        nodeProject: nodeProject,
        reactProject: reactProject,
        nextProject: nextProject,
        scriptProject: scriptProject,
        imageProject: imageProject
    }
    console.log(project);

    projects.push(project)
    renderProject()
}

function renderProject() {
    let projectContainer = document.getElementById('contents');

    projectContainer.innerHTML = `
    <div class="card">
                <div class="image">
                    <img src="assets/image-profil.jpeg" alt="">
                </div>
                <div class="tulisan">
                    <div class="paragraf">

                        <h3>Technologies Mobile App</h3>
                        <h5>Durasi : 30 Hours</h5>
                        <p> bWayssm
                        </p>
                    </div>

                    <div class="icon">
                        <a href=""><img src="assets/google-play-store-svgrepo-com.svg" alt="" style="height: 100%; width: 10%;"></a>
                        <a href=""><img src="assets/android-svgrepo-com.svg" alt="" style="height: 100%; width: 10%;"></a>
                        <a href=""><img src="assets/java-svgrepo-com.svg" alt="" style="height: 100%; width: 10%;"></a>
                        <a href=""><img src="assets/react-svgrepo-com.svg" alt="" style="height: 100%;  width: 10%;"></a>
                    </div>

                    <div class="tombol">
                        <button class="button-edit">Edit</button>
                        <button class="button-delete">Delete</button>
                    </div>
                </div>
            </div>
    `

    for (let i = 0; i < projects.length; i++) {
        projectContainer.innerHTML += `
        <div class="card">
                <div class="image">
                    <img src="${projects[i].imageProject}" alt="">
                </div>
                <div class="tulisan">
                    <div class="paragraf">

                        <h3>${projects[i].nameProject}</h3>
                        <h5>Durasi : ${getTime(projects[i].startDateProject, projects[i].endDateProject)}</h5>
                        <p> ${projects[i].desProject}
                        </p>
                    </div>

                    <div class="icon">

                    ${projects[i].nodeProject?'<a href=""><img src="assets/node-js-svgrepo-com.svg" alt="" style="height: 100%; width: 10%;"></a>':""}
                    ${projects[i].reactProject?'<a href=""><img src="assets/react-svgrepo-com.svg" alt="" style="height: 100%; width: 10%;"></a>':""}
                    ${projects[i].nextProject? '<a href=""><img src="assets/next-js-svgrepo-com.svg" alt="" style="height: 100%; width: 10%;"></a>':""}
                    ${projects[i].scriptProject? '<a href=""><img src="assets/icons8-javascript.svg" alt="" style="height: 100%; width: 10%;"></a>':""}    
            
                    </div>

                    <div class="tombol">
                        <button class="button-edit">Edit</button>
                        <button class="button-delete">Delete</button>
                    </div>
                </div>
            </div>
        `
    }
}

function getTime(dateStart, dateEnd) {
    // let dateStart = new Date(projects.startDateProject);
    // let dateEnd = new Date(projects.endDateProject);

    const convDateStart = new Date(dateStart);
    const convDateEnd = new Date(dateEnd);

    const dateStartNow = convDateStart.getTime();
    const dateEndNow = convDateEnd.getTime();

    let dateNow = dateEndNow - dateStartNow
    let dateCont = dateNow / (1000 * 3600 * 24);

    let fixMonth = 30;
    let fixYear = fixMonth * 12;

    let yearCont = Math.floor(dateCont / fixYear);
    let monthCont = Math.floor((dateCont % fixYear) / fixMonth);
    let weekCont = Math.floor(((dateCont % fixYear) % fixMonth) / 7);
    let dayCont = ((dateCont % fixYear) % fixMonth) % 7;
    let dateFormat = "";

    if (yearCont > 0) {
        return dateFormat += yearCont + " Year" + ' ' + monthCont + " Month ago";
    } else {
        dateCont = dateNow / (1000 * 3600 * 24);

        if (monthCont > 0) {
            return dateFormat += monthCont + " Month" + ' ' + weekCont + " Week ago";
        } else {
            dateCont = dateNow / (1000 * 3600 * 24);

            if (weekCont > 0) {
                return dateFormat += weekCont + " Week" + ' ' + dayCont + " Day ago";
            } else {
                dateCont = dateNow / (1000 * 3600 * 24);

                return dateFormat += dayCont + " Day ago";

            }
        }
    }
}