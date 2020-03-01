export default function workFlow(states: {[key:string]:Function}, start: string) {
    let state: string;
    let scope: object;
    setState(start);

    function setState(key: string): undefined {
        let fn = states[key];
        if (!fn) {
            state = '';
            return;
        }
        state = key;
        let fired = false;
        console.log(state);
        scope = fn((goToKey: string) => {
            if (!fired) setState(goToKey);
            fired = true;
        })
    }

    return () => ({state, scope});
}
