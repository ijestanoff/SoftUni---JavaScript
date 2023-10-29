function browserHistory(browser, input) {
    for (let part of input) {
        if (part.includes('Open')) {
            let site = part.split('Open ')[1];
            browser['Open Tabs'].push(site);
            browser['Browser Logs'].push(part);
        } else if (part.includes('Close')) {
            let site = part.split('Close ')[1];
            for (let i = 0; i < browser['Open Tabs'].length; i++) {
                if (browser['Open Tabs'][i] == site) {
                    let cutted = browser['Open Tabs'].splice(i, 1)[0]
                    browser['Recently Closed'].push(cutted);
                    browser['Browser Logs'].push(part);
                }
            }
        } else if (part.includes('Clear History and Cache')) {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }
    }
    console.log(browser['Browser Name']);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook",
        "Open StackOverFlow",
        "Open Google"]);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia",
        "Clear History and Cache",
        "Open Twitter"]);