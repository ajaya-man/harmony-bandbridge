const { expectRevert } = require("openzeppelin-test-helpers");
const BandChainLibMock = artifacts.require("BandChainLibMock");

require("chai").should();

contract("BandChainLibMock", () => {
  context("BandChainLib should work correctly", () => {
    beforeEach(async () => {
      this.forTest = await BandChainLibMock.new();
    });

    it("should be able to transform bytes8 to unit64", async () => {
      (await this.forTest.toUint64List("0xffffffffffffffff"))
        .toString()
        .should.eq("18446744073709551615");
    });

    it("should be able to transform bytes40 to unit64[5]", async () => {
      (
        await this.forTest.toUint64List(
          "0xffffffffffffffaa1122334455667788ddbbffffffffffff9999999955555555eeeeeeeeeeeeeeee"
        )
      )
        .toString()
        .should.eq(
          "18446744073709551530,1234605616436508552,15977645578003677183,11068046443080406357,17216961135462248174"
        );
    });

    it("should revert if size of the bytes input is not divisible by 8", async () => {
      // bytes7
      await expectRevert(
        this.forTest.toUint64List("0xffffffffffffff"),
        "DATA_LENGTH_IS_INVALID"
      );

      // bytes36
      await expectRevert(
        this.forTest.toUint64List(
          "0xffffffffffffffaa1122334455667788ddbbffffffffffff9999999955555555eeeeeeee"
        ),
        "DATA_LENGTH_IS_INVALID"
      );
    });
  });
});
