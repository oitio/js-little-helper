export default function workFlow(states: {[key:string]:(setState: (key:string)=>object|void) => void}, start: string) {
    let state: string;
    let scope: object|void;
    setState(start);

    function setState(key: string): undefined {
        let fn = states[key];
        if (!fn) {
            state = '';
            return;
        }
        state = key;
        let fired = false;
        scope = fn((goToKey: string): object|void => {
            if (!fired) setState(goToKey);
            fired = true;
        })
    }

    return () => ({state, scope});
}
