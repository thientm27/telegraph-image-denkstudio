/*!
 * FileInput English Translations (from Chinese version)
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author kangqf <kangqingfei@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function ($) {
    "use strict";

    $.fn.fileinputLocales['zh'] = {
        sizeUnits: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        bitRateUnits: ['B/s', 'KB/s', 'MB/s', 'GB/s', 'TB/s', 'PB/s', 'EB/s', 'ZB/s', 'YB/s'],
        fileSingle: 'File',
        filePlural: 'files',
        browseLabel: 'Browse &hellip;',
        removeLabel: 'Remove',
        removeTitle: 'Clear selected files',
        cancelLabel: 'Cancel',
        cancelTitle: 'Cancel ongoing upload',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause upload',
        uploadLabel: 'Upload',
        uploadTitle: 'Upload selected files',
        msgNo: 'No',
        msgNoFilesSelected: 'No files selected',
        msgPaused: 'Paused',
        msgCancelled: 'Cancelled',
        msgPlaceholder: 'Select {files} ...',
        msgZoomModalHeading: 'Detailed Preview',
        msgFileRequired: 'You must select a file to upload.',
        msgSizeTooSmall: 'File "{name}" (<b>{size}</b>) is smaller than the minimum allowed size <b>{minSize}</b>.',
        msgSizeTooLarge: 'File "{name}" (<b>{size}</b>) exceeds the maximum allowed size of <b>{maxSize}</b>.',
        msgFilesTooLess: 'You must select at least <b>{n}</b> {files} to upload.',
        msgFilesTooMany: 'Number of selected files <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (currently selected: <b>{n}</b>).',
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'Preview for "{name}" was aborted.',
        msgFilePreviewError: 'An error occurred while reading "{name}".',
        msgInvalidFileName: 'Filename "{name}" contains invalid characters.',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" types are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" extensions are supported.',
        msgFileTypes: {
            'image': 'image',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'File upload was aborted',
        msgUploadThreshold: 'Processing &hellip;',
        msgUploadBegin: 'Initializing &hellip;',
        msgUploadEnd: 'Done',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'Invalid upload. No valid file.',
        msgUploadError: 'Upload error',
        msgDeleteError: 'Delete error',
        msgProgressError: 'Upload error',
        msgValidationError: 'Validation error',
        msgLoading: 'Loading file {index} of {files} &hellip;',
        msgProgress: 'Loading file {index} of {files} - {name} - {percent}% complete.',
        msgSelected: '{n} {files} selected',
        msgProcessing: 'Processing ...',
        msgFoldersNotAllowed: 'Drag & drop of folders not supported! Skipped {n} folder(s).',
        msgImageWidthSmall: 'Image width for "{name}" must be at least {size} pixels.',
        msgImageHeightSmall: 'Image height for "{name}" must be at least {size} pixels.',
        msgImageWidthLarge: 'Image width for "{name}" cannot exceed {size} pixels.',
        msgImageHeightLarge: 'Image height for "{name}" cannot exceed {size} pixels.',
        msgImageResizeError: 'Unable to get image dimensions for resize.',
        msgImageResizeException: 'Error occurred while resizing image.<pre>{errors}</pre>',
        msgAjaxError: 'Error during {operation}. Please try again!',
        msgAjaxProgressError: '{operation} failed',
        msgDuplicateFile: 'File "{name}" with size "{size}" is already selected. Duplicate skipped.',
        msgResumableUploadRetriesExceeded: 'File <b>{file}</b> failed after <b>{max}</b> retries! Error details: <pre>{error}</pre>',
        msgPendingTime: '{time} remaining',
        msgCalculatingTime: 'Calculating remaining time',
        ajaxOperations: {
            deleteThumb: 'delete file',
            uploadThumb: 'upload file',
            uploadBatch: 'batch upload',
            uploadExtra: 'form data upload'
        },
        dropZoneTitle: 'Drag & drop files here &hellip;<br>Supports multiple files',
        dropZoneClickTitle: '<br>(or click the {files} button to select files)',
        fileActionSettings: {
            removeTitle: 'Remove file',
            uploadTitle: 'Upload file',
            downloadTitle: 'Download file',
            uploadRetryTitle: 'Retry upload',
            rotateTitle: 'Rotate 90° clockwise',
            zoomTitle: 'View details',
            dragTitle: 'Move / Reset',
            indicatorNewTitle: 'Not uploaded yet',
            indicatorSuccessTitle: 'Uploaded',
            indicatorErrorTitle: 'Upload error',
            indicatorPausedTitle: 'Upload paused',
            indicatorLoadingTitle: 'Uploading &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Preview previous file',
            next: 'Preview next file',
            rotate: 'Rotate 90° clockwise',
            toggleheader: 'Toggle zoom',
            fullscreen: 'Fullscreen',
            borderless: 'Borderless mode',
            close: 'Close current preview'
        }
    };
}));
