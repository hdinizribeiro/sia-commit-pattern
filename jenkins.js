window.onload = function(){	
    debugger;
    var options = '<option value="todos">TODOS</option>';
    var projetos = '';
    $(".tab").each(function(){
        var valor = $(this).find("a").text().toLowerCase().replace("projetos","").replace("homologação","").replace("desenvolvimento","").replace("produção","").replace("sustentação","").replace("staging","").replace("homologacao","").replace("producao","").replace("sustentacao","").replace("pipeline","").replace(/-/g , "");
        valor = valor.trim();
        var existe = false;
        if ($(this).find("a").text().toLowerCase().indexOf("projetos") >= 0 || $(this).find("a").text().toLowerCase().indexOf("desenvolvimento") >= 0)
        {
            $(this).css({'background-color' : '#009688'});
            $(this).find('a').css({'color' : '#FFF'});
            existe = true;
        }
        if ($(this).find("a").text().toLowerCase().indexOf("homologação") >= 0 || $(this).find("a").text().toLowerCase().indexOf("homologacao") >= 0)
        {
            $(this).css({'background-color' : '#2e61a2'});
            $(this).find('a').css({'color' : '#FFF'});
            existe = true;
        }
        if ($(this).find("a").text().toLowerCase().indexOf("produção") >= 0 || $(this).find("a").text().toLowerCase().indexOf("producao") >= 0)
        {
            $(this).css({'background-color' : '#f44336'});
            $(this).find('a').css({'color' : '#FFF'});
            existe = true;
        }
        if ($(this).find("a").text().toLowerCase().indexOf("sustentação") >= 0 || $(this).find("a").text().toLowerCase().indexOf("sustentacao") >= 0)
        {
            $(this).css({'background-color' : '#ffc107'});
            $(this).find('a').css({'color' : '#FFF'});
            existe = true;
        }
        if ($(this).find("a").text().toLowerCase().indexOf("staging") >= 0)
        {
            $(this).css({'background-color' : '#9e9e9e'});
            $(this).find('a').css({'color' : '#FFF'});
            existe = true;
        }
        $(this).attr("filtro",valor.replace(/\s/g,''));
        var valOption = '<option value='+valor.replace(/\s/g,'')+'>';
        if(options.indexOf(valOption) == -1 && existe)
        {            
            options = options + valOption +valor+'</option>';    
        }
    })
    
    var textareaCommitPattern = $("<select name='extensionProjetos'>" + options + "</select>");
    textareaCommitPattern.on("change",function(){
        var selecionado = $(this).val();
        $(".tab").each(function(){
            if (selecionado.toLowerCase() != 'todos')
            {
                if ($(this).attr("filtro") == selecionado)
                {
                    $(this).css({'display':'block'});
                }
                else
                {
                    $(this).css({'display':'none'});
                }    
            }
            else
            {
                $(this).css({'display':'block'});
            }
    })});                   
    $("#searchform").before(textareaCommitPattern); 
};

