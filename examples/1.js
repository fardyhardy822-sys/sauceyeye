// uses meta ai app version code 462102728, not sure if itll work below or past that.
Java.perform(() => {
    const TARGET = "X.016";
    try {
        const C = Java.use(TARGET);

        console.log("Hooked:", TARGET);
        if (C.A0x) {
            C.A0x.implementation = function (str) {
                console.log(`→ ${TARGET}.A0x() called with "${str}"`);
                
                const original = this.A0x.apply(this, arguments);
                
                if(str.includes("Shazam found")){
                    const custom = "i love you king ❤️❤️";
                    console.log(`- Returning custom message: ${custom}`);
                    return custom;
                }
                
                return original;
            };
        }

    } catch (err) {
        console.log("Class not available:", TARGET, err);
    }
});
