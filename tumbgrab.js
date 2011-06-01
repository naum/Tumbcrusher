
function getCrushes() {
    var crushlist = [];
    $('#crushes a').each(function(x) {
        crushlist.push($(this).attr('href'));
    });
    console.log("crushlist.length=" + crushlist.length);
    return crushlist;
}


function holaMundo() {
    return 'farwell dude-' + Math.random().toString(36).substr(2, 4) + '!';
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?  "from a content script:" + sender.tab.url 
                               :  "from the extension");
        if (request.op == "getCrushes") {
            sendResponse({message:'OK', crushout: getCrushes()});
        } else {
            sendResponse({});
        }
    }
);

