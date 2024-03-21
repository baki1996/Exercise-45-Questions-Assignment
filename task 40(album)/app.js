var make_album = function (name, title, track) {
    return {
        name: name,
        title: title,
        track: track !== null && track !== void 0 ? track : 0
    };
};
console.log(make_album("Atif Aslam", "Tajdare Haram", 1));
console.log(make_album("Sahir Ali Baggah", "Pakistan Zindabad", 1));
console.log(make_album("Amina Baig", "Pyar Hua tha", 8));
