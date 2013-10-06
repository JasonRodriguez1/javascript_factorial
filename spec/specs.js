describe('factorial', function() {
  it("takes a number and mutiplies it by each iteration of integers less than that number", function(){
    factorial(5).should.equal(120); 
  });

  it("returns invalid for a string", function() {
    factorial('hello').should.equal("invalid");
  });

  it("returns invalid for a negative number", function() {
    factorial(-2).should.equal("invalid");
  });

  it("takes factorial zero and returns 1", function() {
    factorial(0).should.equal(1);
  });
});
