const renderMark = (props, editor, next) => {
    switch (props.mark.type) {
        case 'bold':
            return <strong>{props.children}</strong>;
        case 'code':
            return <code>{props.children}</code>;
        case 'italic':
            return <em>{props.children}</em>;
        case 'strikethrough':
            return <del>{props.children}</del>;
        case 'underline':
            return <u>{props.children}</u>;
        default:
            return next();
    }
}

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'A line of text in a paragraph.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
});

const MarkHotkey = (options) => {
    const { type, key } = options;
    return {
        onKeyDown(event, editor, next) {
            let ctrl = null;
            if (window.navigator.platform == 'Win32') {
                ctrl = event.ctrlKey;
            } else {
                ctrl = event.metaKey;
            }
            if (!ctrl || event.key != key) return next();
            event.preventDefault();
            editor.toggleMark(type);
        },
    };
};

const plugins = [
    MarkHotkey({ key: 'b', type: 'bold' }),
    MarkHotkey({ key: '`', type: 'code' }),
    MarkHotkey({ key: 'i', type: 'italic' }),
    MarkHotkey({ key: ';', type: 'strikethrough' }),
    MarkHotkey({ key: 'u', type: 'underline' }),
];

module.export = { renderMark };
