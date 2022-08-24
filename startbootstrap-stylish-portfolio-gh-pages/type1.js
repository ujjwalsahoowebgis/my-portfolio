function typeArray1(target="typed",stringArray = [" Welcome to My Resume "],letterPerMillisecond=120,gapTypeAndWipe=1000,nextGap=1000) {
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const doSomething = async (string) => {
        for (i = 0; i < string.length; i++) {
            await sleep(letterPerMillisecond)
            document.getElementById(target).textContent = string.substring(0, i + 1) + "|"
            if (i == (string.length - 1)) {
                await sleep(gapTypeAndWipe)
                for (j = string.length; j >= 0; j--) {
                    await sleep(letterPerMillisecond)
                    document.getElementById(target).textContent = string.substring(0, j) + "|"
                }
            }
        }
    }
    (async () => {
        var k = 0
        while (true) {
            if (k == stringArray.length) {
                k = 0
            }
            var string = stringArray[k]
            await doSomething(string)
            await sleep(nextGap)
            k++
        }
    })()
}