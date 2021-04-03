const  fixPathName = (path = "") => {
    const fixedPath = path.slice(6).replaceAll("\\", "/");
    return fixedPath;
}

module.exports = fixPathName;