let  make_album = (name: string, title: string, track?: number ) => {
    return{
        name: name,
        title : title,
        track : track ?? 0
    }
}
console.log(make_album("Atif Aslam", "Tajdare Haram", 1));
console.log(make_album("Sahir Ali Baggah", "Pakistan Zindabad", 1));
console.log(make_album("Amina Baig", "Pyar Hua tha", 8));

