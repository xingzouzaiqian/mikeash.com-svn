// This file was generated by Dashcode from Apple Computer, Inc.
// DO NOT EDIT - This file is maintained automatically by Dashcode.
function setupParts() {
    if (setupParts.called) return;
    setupParts.called = true;
    CreateInfoButton('info', { frontID: 'front', foregroundStyle: 'white', backgroundStyle: 'black', onclick: 'showBack' });
    CreateGlassButton('done', { text: 'Done', onclick: 'showFront' });
    CreateScrollArea('tableBox', { spacing: 4, hasVerticalScrollbar: true, autoHideScrollbars: true });
    CreateText('loadingoverlay', { text: 'Loading...' });
}
window.addEventListener('load', setupParts, false);
