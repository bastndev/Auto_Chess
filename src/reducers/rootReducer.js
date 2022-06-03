import boardReducer from './boardReducer';
import historyReducer from './historyReducer';
import modeReducer from './modeReducer';
import serverReducer from './serverReducer';
import takebackAcceptDialogReducer from './takebackAcceptDialogReducer';
import takebackOfferDialogReducer from './takebackOfferDialogReducer';
import enterInviteCodeDialogReducer from './enterInviteCodeDialogReducer';
import heuristicsBarReducer from './heuristicsBarReducer';
import heuristicsDialogReducer from './heuristicsDialogReducer';
import drawAcceptDialogReducer from './drawAcceptDialogReducer';
import drawOfferDialogReducer from './drawOfferDialogReducer';
import resignAcceptDialogReducer from './resignAcceptDialogReducer';
import rematchAcceptDialogReducer from './rematchAcceptDialogReducer';
import rematchOfferDialogReducer from './rematchOfferDialogReducer';
import playLikeGrandmasterDialogReducer from './playLikeGrandmasterDialogReducer';
import playOnlineDialogReducer from './playOnlineDialogReducer';
import chessOpeningAnalysisTableReducer from './chessOpeningAnalysisTableReducer';
import gameTableReducer from './gameTableReducer';
import infoAlertReducer from '../features/alert/infoAlertSlice';
import createInviteCodeDialogReducer from '../features/dialog/createInviteCodeDialogSlice';
import loadFenDialogReducer from '../features/dialog/loadFenDialogSlice';
import loadPgnDialogReducer from '../features/dialog/loadPgnDialogSlice';
import openingSearchEcoDialogReducer from '../features/dialog/openingSearchEcoDialogSlice';
import openingSearchMovetextDialogReducer from '../features/dialog/openingSearchMovetextDialogSlice';
import openingSearchNameDialogReducer from '../features/dialog/openingSearchNameDialogSlice';
import progressDialogReducer from '../features/dialog/progressDialogSlice';
import watchDialogReducer from '../features/dialog/watchDialogSlice';

const rootReducer = {
  board: boardReducer,
  heuristicsBar: heuristicsBarReducer,
  history: historyReducer,
  mode: modeReducer,
  server: serverReducer,
  infoAlert: infoAlertReducer,
  loadFenDialog: loadFenDialogReducer,
  takebackAcceptDialog: takebackAcceptDialogReducer,
  takebackOfferDialog: takebackOfferDialogReducer,
  createInviteCodeDialog: createInviteCodeDialogReducer,
  enterInviteCodeDialog: enterInviteCodeDialogReducer,
  heuristicsDialog: heuristicsDialogReducer,
  drawAcceptDialog: drawAcceptDialogReducer,
  drawOfferDialog: drawOfferDialogReducer,
  resignAcceptDialog: resignAcceptDialogReducer,
  loadPgnDialog: loadPgnDialogReducer,
  rematchAcceptDialog: rematchAcceptDialogReducer,
  rematchOfferDialog: rematchOfferDialogReducer,
  playLikeGrandmasterDialog: playLikeGrandmasterDialogReducer,
  playOnlineDialog: playOnlineDialogReducer,
  openingSearchEcoDialog: openingSearchEcoDialogReducer,
  openingSearchNameDialog: openingSearchNameDialogReducer,
  openingSearchMovetextDialog: openingSearchMovetextDialogReducer,
  progressDialog: progressDialogReducer,
  chessOpeningAnalysisTable: chessOpeningAnalysisTableReducer,
  gameTable: gameTableReducer,
  watchDialog: watchDialogReducer
};

export default rootReducer;
