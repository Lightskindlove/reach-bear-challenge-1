'reach 0.1';

// const COUNTDOWN = 20;

const shared = {
  showTime: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  showTransfer: Fun([UInt, Bool], Null),
};


export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...shared,
    inherit: UInt,
    getChoice: Fun([], Bool),
    deadline: UInt,
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...shared,
    acceptTerms: Fun([UInt], Bool),
  });
  init();

  const informTimeout = () => {
    each([A,B], () => {
      interact.informTimeout();
    });
  }
  // The first one to publish deploys the contract
  A.only(() => {
  const value = declassify(interact.inherit);
  const deadline = declassify(interact.deadline);
  });
  A.publish(value, deadline).pay(value);
  commit();
  // The second one to publish always attaches
  B.only(() => {
    const terms = declassify(interact.acceptTerms(value));
  });
  B.publish(terms).timeout(relativeTime(deadline), () => closeTo(A, informTimeout));
  if (!terms) {
    commit();
    closeTo(A);
  }

  each([A, B], () => {
    interact.showTime(deadline);
  });

  const end = lastConsensusTime() + deadline;
  var here = true;
  invariant( balance() == value );
  while (lastConsensusTime() <= end && here == true) {
    commit();

    A.only(() => {
    const stillHere = declassify(interact.getChoice());
    });
    A.publish(stillHere).timeout(relativeTime(end), () => closeTo(B, informTimeout));
    here = stillHere;
    continue;
  }

  here == true ? transfer(value).to(A) : transfer(value).to(B);

  each([A, B], () => {
    interact.showTransfer(value, here);
  });

  commit();
  exit();
});
