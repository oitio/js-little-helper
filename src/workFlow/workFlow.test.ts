import workFlow from "./workFlow";
test('create workFlow', () => {
   workFlow({asdf: goto=>{}}, 'asdf');
   expect(1).toBe(1)
});
