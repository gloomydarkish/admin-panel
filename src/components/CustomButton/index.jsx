export default function CustomButton ({children, template}) {

    return (
        <div style={{
            backgroundColor: 'brown',
            padding: '25px'
        }}
        >
            {template}
            {children}
        </div>
    )
}