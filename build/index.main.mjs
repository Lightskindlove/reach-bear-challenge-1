// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      8: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v186 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v187 = stdlib.protect(ctc0, interact.inherit, 'for Alice\'s interact field inherit');
  
  const txn1 = await (ctc.sendrecv({
    args: [v187, v186],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v187, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v191, v192], secs: v194, time: v193, didSend: v31, from: v190 } = txn1;
      
      sim_r.txns.push({
        amt: v191,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v203 = stdlib.add(v193, v192);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v191, v192], secs: v194, time: v193, didSend: v31, from: v190 } = txn1;
  ;
  const v203 = stdlib.add(v193, v192);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: ['time', v203],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v190, v191, v193, v203],
      evt_cnt: 0,
      funcNum: 2,
      lct: v193,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v306, time: v305, didSend: v154, from: v304 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v190,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v306, time: v305, didSend: v154, from: v304 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:29:29:application',
      fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:27:28:function exp)', 'at ./index.rsh:43:65:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v209], secs: v211, time: v210, didSend: v40, from: v208 } = txn2;
    ;
    if (v209) {
      stdlib.protect(ctc2, await interact.showTime(v192), {
        at: './index.rsh:50:22:application',
        fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)'],
        msg: 'showTime',
        who: 'Alice'
        });
      
      let v232 = true;
      let v233 = v210;
      let v234 = v193;
      let v240 = v191;
      
      while (await (async () => {
        const v244 = stdlib.le(v234, v203);
        const v246 = v244 ? v232 : false;
        
        return v246;})()) {
        const v253 = stdlib.add(v233, v203);
        const v257 = stdlib.protect(ctc1, await interact.getChoice(), {
          at: './index.rsh:60:52:application',
          fs: ['at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:15:function exp)'],
          msg: 'getChoice',
          who: 'Alice'
          });
        
        const txn3 = await (ctc.sendrecv({
          args: [v190, v191, v203, v208, v233, v240, v253, v257],
          evt_cnt: 1,
          funcNum: 4,
          lct: v233,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:62:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v259], secs: v261, time: v260, didSend: v85, from: v258 } = txn3;
            
            ;
            const cv232 = v259;
            const cv233 = v260;
            const cv234 = v233;
            const cv240 = v240;
            
            await (async () => {
              const v232 = cv232;
              const v233 = cv233;
              const v234 = cv234;
              const v240 = cv240;
              
              if (await (async () => {
                const v244 = stdlib.le(v234, v203);
                const v246 = v244 ? v232 : false;
                
                return v246;})()) {
                const v253 = stdlib.add(v233, v203);
                sim_r.isHalt = false;
                }
              else {
                if (v232) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v190,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v208,
                    tok: undefined /* Nothing */
                    });
                  
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v253],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const txn4 = await (ctc.sendrecv({
            args: [v190, v191, v203, v208, v233, v240, v253],
            evt_cnt: 0,
            funcNum: 5,
            lct: v233,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v265, time: v264, didSend: v105, from: v263 } = txn4;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v208,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v265, time: v264, didSend: v105, from: v263 } = txn4;
          ;
          const v266 = stdlib.addressEq(v190, v263);
          const v267 = stdlib.addressEq(v208, v263);
          const v268 = v266 ? true : v267;
          stdlib.assert(v268, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:62:66:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:29:29:application',
            fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:27:28:function exp)', 'at ./index.rsh:62:66:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v259], secs: v261, time: v260, didSend: v85, from: v258 } = txn3;
          ;
          const v262 = stdlib.addressEq(v190, v258);
          stdlib.assert(v262, {
            at: './index.rsh:62:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const cv232 = v259;
          const cv233 = v260;
          const cv234 = v233;
          const cv240 = v240;
          
          v232 = cv232;
          v233 = cv233;
          v234 = cv234;
          v240 = cv240;
          
          continue;}
        
        }
      if (v232) {
        ;
        stdlib.protect(ctc2, await interact.showTransfer(v191, true), {
          at: './index.rsh:70:26:application',
          fs: ['at ./index.rsh:69:7:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
          msg: 'showTransfer',
          who: 'Alice'
          });
        
        return;
        }
      else {
        ;
        stdlib.protect(ctc2, await interact.showTransfer(v191, false), {
          at: './index.rsh:70:26:application',
          fs: ['at ./index.rsh:69:7:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
          msg: 'showTransfer',
          who: 'Alice'
          });
        
        return;
        }}
    else {
      const txn3 = await (ctc.sendrecv({
        args: [v190, v191, v208],
        evt_cnt: 0,
        funcNum: 6,
        lct: v210,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v215, time: v214, didSend: v50, from: v213 } = txn3;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v190,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v215, time: v214, didSend: v50, from: v213 } = txn3;
      ;
      const v216 = stdlib.addressEq(v190, v213);
      const v217 = stdlib.addressEq(v208, v213);
      const v218 = v216 ? true : v217;
      stdlib.assert(v218, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:46:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      return;
      
      
      }}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v191, v192], secs: v194, time: v193, didSend: v31, from: v190 } = txn1;
  ;
  const v203 = stdlib.add(v193, v192);
  const v207 = stdlib.protect(ctc1, await interact.acceptTerms(v191), {
    at: './index.rsh:41:50:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:13:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v190, v191, v193, v203, v207],
    evt_cnt: 1,
    funcNum: 1,
    lct: v193,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v209], secs: v211, time: v210, didSend: v40, from: v208 } = txn2;
      
      ;
      if (v209) {
        
        const v232 = true;
        const v233 = v210;
        const v234 = v193;
        const v240 = v191;
        
        if (await (async () => {
          const v244 = stdlib.le(v234, v203);
          const v246 = v244 ? v232 : false;
          
          return v246;})()) {
          const v253 = stdlib.add(v233, v203);
          sim_r.isHalt = false;
          }
        else {
          if (v232) {
            sim_r.txns.push({
              kind: 'from',
              to: v190,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v208,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v203],
    tys: [ctc3, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v190, v191, v193, v203],
      evt_cnt: 0,
      funcNum: 2,
      lct: v193,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v306, time: v305, didSend: v154, from: v304 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v190,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v306, time: v305, didSend: v154, from: v304 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:29:29:application',
      fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:27:28:function exp)', 'at ./index.rsh:43:65:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v209], secs: v211, time: v210, didSend: v40, from: v208 } = txn2;
    ;
    if (v209) {
      stdlib.protect(ctc2, await interact.showTime(v192), {
        at: './index.rsh:50:22:application',
        fs: ['at ./index.rsh:49:7:application call to [unknown function] (defined at: ./index.rsh:49:19:function exp)'],
        msg: 'showTime',
        who: 'Bob'
        });
      
      let v232 = true;
      let v233 = v210;
      let v234 = v193;
      let v240 = v191;
      
      while (await (async () => {
        const v244 = stdlib.le(v234, v203);
        const v246 = v244 ? v232 : false;
        
        return v246;})()) {
        const v253 = stdlib.add(v233, v203);
        const txn3 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc1],
          timeoutAt: ['time', v253],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const txn4 = await (ctc.sendrecv({
            args: [v190, v191, v203, v208, v233, v240, v253],
            evt_cnt: 0,
            funcNum: 5,
            lct: v233,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v265, time: v264, didSend: v105, from: v263 } = txn4;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v208,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v265, time: v264, didSend: v105, from: v263 } = txn4;
          ;
          const v266 = stdlib.addressEq(v190, v263);
          const v267 = stdlib.addressEq(v208, v263);
          const v268 = v266 ? true : v267;
          stdlib.assert(v268, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:62:66:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:29:29:application',
            fs: ['at ./index.rsh:28:9:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:27:28:function exp)', 'at ./index.rsh:62:66:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v259], secs: v261, time: v260, didSend: v85, from: v258 } = txn3;
          ;
          const v262 = stdlib.addressEq(v190, v258);
          stdlib.assert(v262, {
            at: './index.rsh:62:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const cv232 = v259;
          const cv233 = v260;
          const cv234 = v233;
          const cv240 = v240;
          
          v232 = cv232;
          v233 = cv233;
          v234 = cv234;
          v240 = cv240;
          
          continue;}
        
        }
      if (v232) {
        ;
        stdlib.protect(ctc2, await interact.showTransfer(v191, true), {
          at: './index.rsh:70:26:application',
          fs: ['at ./index.rsh:69:7:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
          msg: 'showTransfer',
          who: 'Bob'
          });
        
        return;
        }
      else {
        ;
        stdlib.protect(ctc2, await interact.showTransfer(v191, false), {
          at: './index.rsh:70:26:application',
          fs: ['at ./index.rsh:69:7:application call to [unknown function] (defined at: ./index.rsh:69:19:function exp)'],
          msg: 'showTransfer',
          who: 'Bob'
          });
        
        return;
        }}
    else {
      const txn3 = await (ctc.sendrecv({
        args: [v190, v191, v208],
        evt_cnt: 0,
        funcNum: 6,
        lct: v210,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v215, time: v214, didSend: v50, from: v213 } = txn3;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v190,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v215, time: v214, didSend: v50, from: v213 } = txn3;
      ;
      const v216 = stdlib.addressEq(v190, v213);
      const v217 = stdlib.addressEq(v208, v213);
      const v218 = v216 ? true : v217;
      stdlib.assert(v218, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:46:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      return;
      
      
      }}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiALAAEGCCACBWBYKDAmAgEAACI1ADEYQQMfKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEEDEABBkkhBgxAAJ9JJAxAAEkkEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEYbSsDLA0/zEAEjQDVyggMQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgJLSCQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhB1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyEIW7III7IQNP+yB7NCAftIJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQUXNf6ABO7n6CI0/hZRBwhQsDIGNAMhB1sMRDT/MQASRDT/NAMhBFs0AyEJWzQDVzAgNP4yBjQDgVBbNAMhCFtCASNJIwxAAL5JIQUMQABBIQUSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhClsPRLEisgE0AyEEW7III7IQNANXACCyB7NCAU1IIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+IQpbNf1JNQUXNfyABA+/xjQ0/BZRBwhQsDIGNP0MRDT8QQAVNP80/jT9MQAjMgY0AyEJWzT+QgB6NP80/hZQMQBQKEsBVwBIZ0glNQEyBjUCQgDzSIGgjQaIAT0iNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwNP+IAQ0yBjT+CDX9MQA0/xZQMgYWUDT9FlAoSwFXADhnSCM1ATIGNQJCAJQ1/zX+Nf01/DX7Nfo1+TX4NP40+g40/BBBADI0/TT6CDX3NPg0+RZQNPoWUDT7UDT9FlA0/xZQNPcWUChLAVcAaGdIJDUBMgY1AkIARzT8QQATsSKyATT5sggjshA0+LIHs0IAE7EisgE0+bIII7IQNPuyB7NCAAAxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v209",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v259",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v209",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v259",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620013da380380620013da833981016040819052620000269162000247565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000140565b6020808301510151620000b39043620002a7565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860151518552438085528b51835260019788905590965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013692600292909101906200016a565b505050506200030b565b81620001665760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017890620002ce565b90600052602060002090601f0160209004810192826200019c5760008555620001e7565b82601f10620001b757805160ff1916838001178555620001e7565b82800160010185558215620001e7579182015b82811115620001e7578251825591602001919060010190620001ca565b50620001f5929150620001f9565b5090565b5b80821115620001f55760008155600101620001fa565b604080519081016001600160401b03811182821017156200024157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025b57600080fd5b6200026562000210565b835181526040601f19830112156200027c57600080fd5b6200028662000210565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002c957634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e357607f821691505b602082108114156200030557634e487b7160e01b600052602260045260246000fd5b50919050565b6110bf806200031b6000396000f3fe6080604052600436106100795760003560e01c80639a3e39121161004b5780639a3e3912146100e1578063a98bf223146100f4578063ab53f2c614610107578063c79800371461012a57005b80631e93b0f1146100825780637eea518c146100a657806383230757146100b95780638e314769146100ce57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610d70565b61013d565b3480156100c557600080fd5b50600154610093565b6100806100dc366004610d70565b6102bb565b6100806100ef366004610d70565b610456565b610080610102366004610d70565b610685565b34801561011357600080fd5b5061011c610841565b60405161009d929190610d93565b610080610138366004610d70565b6108de565b61014d600160005414600d610a22565b6101678135158061016057506001548235145b600e610a22565b60008080556002805461017990610df0565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610df0565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610e41565b905061021e8160600151431015600f610a22565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161024f929190610eca565b60405180910390a16102633415600c610a22565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102a0573d6000803e3d6000fd5b50600080805560018190556102b790600290610c20565b5050565b6102cb6006600054146017610a22565b6102e5813515806102de57506001548235145b6018610a22565b6000808055600280546102f790610df0565b80601f016020809104026020016040519081016040528092919081815260200182805461032390610df0565b80156103705780601f1061034557610100808354040283529160200191610370565b820191906000526020600020905b81548152906001019060200180831161035357829003601f168201915b50505050508060200190518101906103889190610eff565b905061039c8160c001514310156019610a22565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516103cd929190610eca565b60405180910390a16103e134156015610a22565b8051610415906001600160a01b0316331461040b5760608201516001600160a01b0316331461040e565b60015b6016610a22565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156102a0573d6000803e3d6000fd5b6104666001600054146009610a22565b6104808135158061047957506001548235145b600a610a22565b60008080556002805461049290610df0565b80601f01602080910402602001604051908101604052809291908181526020018280546104be90610df0565b801561050b5780601f106104e05761010080835404028352916020019161050b565b820191906000526020600020905b8154815290600101906020018083116104ee57829003601f168201915b50505050508060200190518101906105239190610e41565b905061053681606001514310600b610a22565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153383604051610567929190610fb8565b60405180910390a161057b34156008610a22565b61058b6040830160208401610fd5565b156105fd57610598610c5d565b815181516001600160a01b039091169052602080830180518351830152606080850151845160409081019190915284513390830152838501805160019052805143950194909452808601518451909101529051915101526105f881610a47565b505050565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845233835260089095554360015587519384019490945290519582019590955293511690830152906080015b6040516020818303038152906040526002908051906020019061067f929190610cbf565b50505050565b6106956006600054146012610a22565b6106af813515806106a857506001548235145b6013610a22565b6000808055600280546106c190610df0565b80601f01602080910402602001604051908101604052809291908181526020018280546106ed90610df0565b801561073a5780601f1061070f5761010080835404028352916020019161073a565b820191906000526020600020905b81548152906001019060200180831161071d57829003601f168201915b50505050508060200190518101906107529190610eff565b90506107658160c0015143106014610a22565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943383604051610796929190610fb8565b60405180910390a16107aa34156010610a22565b80516107c2906001600160a01b031633146011610a22565b6107ca610c5d565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925261080f918501908501610fd5565b60208083018051921515909252815143910152608083015181516040015260a08301519051606001526105f881610a47565b60006060600054600280805461085690610df0565b80601f016020809104026020016040519081016040528092919081815260200182805461088290610df0565b80156108cf5780601f106108a4576101008083540402835291602001916108cf565b820191906000526020600020905b8154815290600101906020018083116108b257829003601f168201915b50505050509050915091509091565b6108ee600860005414601c610a22565b6109088135158061090157506001548235145b601d610a22565b60008080556002805461091a90610df0565b80601f016020809104026020016040519081016040528092919081815260200182805461094690610df0565b80156109935780601f1061096857610100808354040283529160200191610993565b820191906000526020600020905b81548152906001019060200180831161097657829003601f168201915b50505050508060200190518101906109ab9190610ff0565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33836040516109de929190610eca565b60405180910390a16109f23415601a610a22565b8051610263906001600160a01b03163314610a1c5760408201516001600160a01b03163314610a1f565b60015b601b5b816102b75760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081528160000151604001518260200151604001511115610a75576000610a7c565b6020820151515b15610b92578151604001516020808401510151610a999190611063565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093168385015281860180518301516080860152519092015160a0840152835160c0840152600660005543600155905161065b9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60208201515115610bdd57815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102a0573d6000803e3d6000fd5b815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102a0573d6000803e3d6000fd5b508054610c2c90610df0565b6000825580601f10610c3c575050565b601f016020900490600052602060002090810190610c5a9190610d43565b50565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610cba60405180608001604052806000151581526020016000815260200160008152602001600081525090565b905290565b828054610ccb90610df0565b90600052602060002090601f016020900481019282610ced5760008555610d33565b82601f10610d0657805160ff1916838001178555610d33565b82800160010185558215610d33579182015b82811115610d33578251825591602001919060010190610d18565b50610d3f929150610d43565b5090565b5b80821115610d3f5760008155600101610d44565b600060408284031215610d6a57600080fd5b50919050565b600060408284031215610d8257600080fd5b610d8c8383610d58565b9392505050565b82815260006020604081840152835180604085015260005b81811015610dc757858101830151858201606001528201610dab565b81811115610dd9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610e0457607f821691505b60208210811415610d6a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610e3c57600080fd5b919050565b600060808284031215610e5357600080fd5b6040516080810181811067ffffffffffffffff82111715610e8457634e487b7160e01b600052604160045260246000fd5b604052610e9083610e25565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b80358015158114610e3c57600080fd5b6001600160a01b038316815281356020808301919091526060820190610ef1908401610eba565b151560408301529392505050565b600060e08284031215610f1157600080fd5b60405160e0810181811067ffffffffffffffff82111715610f4257634e487b7160e01b600052604160045260246000fd5b604052610f4e83610e25565b81526020830151602082015260408301516040820152610f7060608401610e25565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b80358252610fad60208201610eba565b151560208301525050565b6001600160a01b038316815260608101610d8c6020830184610f9d565b600060208284031215610fe757600080fd5b610d8c82610eba565b60006060828403121561100257600080fd5b6040516060810181811067ffffffffffffffff8211171561103357634e487b7160e01b600052604160045260246000fd5b60405261103f83610e25565b81526020830151602082015261105760408401610e25565b60408201529392505050565b6000821982111561108457634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220fabff8bacb3f5545356a9ebdd301a9752699f1ae0cd38d43f518adf3ee4b45f864736f6c634300080c0033`,
  BytecodeLen: 5082,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:38:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:43:65:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:62:66:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:45:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:46:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
