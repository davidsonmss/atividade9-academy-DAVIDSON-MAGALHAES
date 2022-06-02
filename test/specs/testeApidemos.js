describe("Testando a apidemos.apk", () => {
    it("Verificando se o nome do aplicativo é API Demos", async () => {
        const tituloApp = await $("android.widget.TextView").getText();
        expect(tituloApp).toBe("API Demos");
        await $("//android.widget.TextView[@content-desc='App']").click();
    });
    it("Verificando se contém (Ok e o cancel) no Alert/Dialogs", async () => {
        await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click();
        var tituloAlert = await $("android.widget.TextView").getText();
        expect(tituloAlert).toBe("App/Alert Dialogs");
        await $("id=io.appium.android.apis:id/two_buttons").click();
        var visibilidadeBotaoOk = await $("id=android:id/button1").isDisplayed();
        expect(visibilidadeBotaoOk).toBe(true);
        var visibilidadeBotaoCancel = await $("id=android:id/button2").isDisplayed();
        expect(visibilidadeBotaoCancel).toBe(true);
        await $("id=android:id/button2").click();
    });
    it("Verificando as mensagens do LIST DIALOG", async () => {
        await $('//android.widget.Button[@content-desc="List dialog"]').click();
        var visibilidadeHeader = await $("id=android:id/alertTitle").getText();
        expect(visibilidadeHeader).toBe("Header title");
        await $("id=android:id/text1").click();
        var mensagemOne = await $("id=android:id/message").getText();
        expect(mensagemOne).toBe("You selected: 0 , Command one");
    });
    xit("Verificando o botão Hide e Show", async () => {
        await $("//android.widget.TextView[@content-desc='Fragment']").click();
        await $('//android.widget.TextView[@content-desc="Hide and Show"]').click();
        var botaoHide = await $('(//android.widget.Button[@content-desc="Hide"])[1]').isDisplayed();
        expect(botaoHide).toBe(true);
        await $('(//android.widget.Button[@content-desc="Hide"])[1]').click();
        var botaoShow = await $("id=io.appium.android.apis:id/frag1hide").getText();
        expect(botaoShow).toBe("SHOW");
    });
});
