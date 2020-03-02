import workFlow from "./workFlow";
test('create workFlow', () => {
   const stateFunctions = {};
   workFlow({asdf: (goto) => {}}, 'asdf');
   expect(1).toBe(1)
});
