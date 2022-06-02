describe("Aplicação API Demos", () => {
    
    afterEach(async() =>{
        driver.reset();
    });
    
    it("Interações do aplicativo em App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        const botaoVisivel = await $('id=two_buttons').isDisplayed();
        expect(botaoVisivel).toBe(true);
        await $('id=two_buttons').click();
        
        // Clicar na opção "OK" e na opção "Cancel";
         await $('android=new UiSelector().text("OK")').click();
         const tituloVisivel = await $('android=new UiSelector().text("App/Alert Dialogs")').getText();
         expect(tituloVisivel).toBe('App/Alert Dialogs');
         await $('id=two_buttons').click();
         await $('android=new UiSelector().text("CANCEL")').click();
         
         // Verificando o retorno para a tela anterior
         expect(tituloVisivel).toBe('App/Alert Dialogs');
    });

    it("Interações do aplicativo em App/Alert Dialogs/LIST DIALOG", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        
        // Modal com os 4 comandos
        const tituloVisivel = await $('android=new UiSelector().text("Header title").className("android.widget.TextView")').getText();
        expect(tituloVisivel).toBe('Header title');
        const commandOne = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed();
        const commandTwo = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed();
        const commandThree = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed();
        const commandFour = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed();
        expect(commandOne).toBe(true);
        expect(commandTwo).toBe(true); 
        expect(commandThree).toBe(true);
        expect(commandFour).toBe(true);
        
        // Testando a interação com um dos comandos
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        const modalMensagem = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(modalMensagem).toBe("You selected: 0 , Command one");
    });

    it("Interações do aplicativo em App/Fragment/Hide and Show", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        const titulo = await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').getText();
        expect(titulo).toBe("Demonstration of hiding and showing fragments.")
    });

    it('Interagindo com os botões de MOSTRAR em App/Fragment/Hide and Show', async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        
        // Interagindo com os botões hide and show
        const botaoHideShow1 = await $("id=frag1hide").getText();
        const botaoHideShow2 = await $("id=frag2hide").getText();
        const tituloInput1 = await $('android=new UiSelector().text("The fragment saves and restores this text.")').isDisplayed();
        const tituloInput2 = await $('android=new UiSelector().text("The TextView saves and restores this text.")').isDisplayed();
        expect(botaoHideShow1).toBe("HIDE");
        expect(botaoHideShow2).toBe("HIDE");
        expect(tituloInput1).toBe(true);
        expect(tituloInput2).toBe(true);
        await $("id=frag1hide").click();
        await $("id=frag2hide").click();
    });

    it("Interação no aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_HOME_AS_UP", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        
        // Validando as interações com a opção DISPLAY_HOME_AS_UP
        const visivelDisplayHome = await $("id=toggle_home_as_up").isDisplayed();
        expect(visivelDisplayHome).toBe(true);
        await $("id=toggle_home_as_up").click();
        const titulo = await $("android.widget.TextView").getText();
        expect(titulo).toBe("App/Action Bar/Display Options");
    });

    it("Interagindo com o aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_TITLE", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        
        // Interagindo com o botão 'DISPLAY_SHOW_TITLE'
        const visivelDisplayShow = await $("id=toggle_show_title").isDisplayed();
        expect(visivelDisplayShow).toBe(true);
        const tituloAtivado = await $("android.widget.TextView").getText();
        expect(tituloAtivado).toBe("App/Action Bar/Display Options");
        await $("id=toggle_show_title").click();
        const tituloDesativado = await $("android.view.ViewGroup").getText();
        expect(tituloDesativado).toBe("");
    });

    it("Interagindo nas opções do aplicativo em App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_CUSTOM", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        
        // Interações com o botão "DISPLAY_SHOW_CUSTOM"
        const customBotao = await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM")').isDisplayed();
        expect(customBotao).toBe(true);
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM")').click();
        const customAtivado = await $("android.widget.Button").isDisplayed();
        expect(customAtivado).toBe(true);
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM")').click();
        const custonDesativado = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(custonDesativado).toBe(false);
       
    });

    it("Interagindo nas opções do aplicativo em App/Action Bar/Display options, testes na opção DISPLAY_SHOW_NAVIGATION", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        
        // Interações com o botão "NAVIGATION"
        const titulo = await $("android.widget.TextView").getText();
        expect(titulo).toBe("App/Action Bar/Display Options");
        const botaoNavigation = await $("id=toggle_navigation").isDisplayed();
        expect(botaoNavigation).toBe(true);
        await $("id=toggle_navigation").click();
        
        // Verificando as abas "tab" na tela
        const tab1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed();
        const tab2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed();
        const tab3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed();
        expect(tab1).toBe(true);
        expect(tab2).toBe(true);
        expect(tab3).toBe(true);
        await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
        await $("id=toggle_navigation").pause(1000);
        // Verificando se as abas saíram
        const tabInativa = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed();
        expect(tabInativa).toBe(false);  
    });
});

