({
    baseUrl: "../",
    name: "components/almond/almond.js",
    out: "../builds/converse.nojquery.min.js",
    include: ['main'],
    tpl: {
        // Use Mustache style syntax for variable interpolation
        templateSettings: {
            evaluate : /\{\[([\s\S]+?)\]\}/g,
            interpolate : /\{\{([\s\S]+?)\}\}/g
        }
    },
    map: {
        // '*' means all modules will get 'jquery-private'
        // for their 'jquery' dependency.
        '*': { 'jquery': 'jquery-private' },
        // 'jquery-private' wants the real jQuery module
        // though. If this line was not here, there would
        // be an unresolvable cyclic dependency.
        'jquery-private': { 'jquery': 'jquery' }
    },
    mainConfigFile: '../main.js',
    paths: {
        "converse-dependencies":    "src/deps-full",
        "jquery":                   "src/jquery-external",
        "jquery-private":           "src/jquery-private-external",
    }
})
