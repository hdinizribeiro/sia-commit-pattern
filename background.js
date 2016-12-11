window.onload = function(){	

    assignCheckListRemider();

    var link = $("<a></a>");

    var epicFull = $('[data-fieldtype="gh-epic-link"] a').attr('href');

    if(!epicFull)
        return;

    var epicJira = epicFull.substring(8, epicFull.length);

    var srdFull = $('[data-fieldtype="gh-epic-link"] a').text();
    var srdNumber = srdFull.substring(srdFull.indexOf("[") + 1, srdFull.indexOf("]"));
   
    var taskJira = $("#key-val").text();
    var taskSummary = $("#summary-val").text();
    debugger;
    $(".stsummary .issue-link").each(function(){
        var link = $("<a class='aui-button' style='display:inherit'>Commit Pattern (copy to clipboard)</a>");
        var self = $(this);

        link.click(function(){
            $('.commit-pattern').detach();
            var commitPattern = '[SRD#' + srdNumber + '|' + epicJira + '] / [' + taskJira + '] / [' + self.attr("data-issue-key") + '] / ' + taskSummary + ' / ' + self.text();            
            var textareaCommitPattern = $("<textarea style='width:100%; height: 90px' class='text long-field commit-pattern'>" + commitPattern + "</textarea>");
                        
            $(this).after(textareaCommitPattern);                          
            
            textareaCommitPattern.select();
            document.execCommand('copy');
        });


        self.after(link);
    })
};


function assignCheckListRemider(){
    var subImpCards = $(".ghx-type-51");

    if(subImpCards.length > 0)
        subImpCards.on("mouseup", function(){
            checkResolved(function(resolved){
                if(resolved)
                    alert("Ow, lembrou de preencher o checklist de code-review?");
            });
        });
    else
        setTimeout(assignCheckListRemider, 100);
}

function checkResolved(callBackResolved){
    var btnSubmit = $("#issue-workflow-transition-submit");

    if(btnSubmit.length > 0)
        callBackResolved(btnSubmit.val() == "Resolved");
    else
        setTimeout(function(){checkResolved(callBackResolved)}, 100);
}


