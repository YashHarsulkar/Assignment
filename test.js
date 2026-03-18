const { Builder, By, until } = require('selenium-webdriver');

async function debugElementInteraction() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Assume a test page is available at this URL with a form and a 'Submit' button
        // The button might appear after some delay or be nested within other elements.
        await driver.get('http://www.example.com/form-with-submit');

        // BUG: This locator is too generic and might not wait for the specific element.
        let submitButton = await driver.findElement(By.xpath("//button[text()='submit']"));
        await submitButton.click();

        console.log('Attempted to click button.');
        driver.wait(until.elementIsVisible(submitButton),3000);
        
        // In a real scenario, an assertion would follow here.
    } finally {
        await driver.quit();
    }
}

debugElementInteraction();