function getStoredIdsInLocalStorage() {
    const storedAppliedJobs = localStorage.getItem("applied-jobs");

    if(storedAppliedJobs) {
        return JSON.parse(storedAppliedJobs);
    }

    return [];
}

function setIdsToLocalStorage(id) {
    const storedAppliedJobs = getStoredIdsInLocalStorage();
    const exist = storedAppliedJobs.find(jobId => jobId === id)

    if(!exist) {
        storedAppliedJobs.push(id)
        localStorage.setItem("applied-jobs", JSON.stringify(storedAppliedJobs));
    }
}

export {getStoredIdsInLocalStorage, setIdsToLocalStorage};