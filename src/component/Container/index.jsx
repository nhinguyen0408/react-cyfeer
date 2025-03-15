const Container = ({children, shadow, className}) => {
    return (
        <div className={`bg-white rounded-lg p-4 ${shadow ? 'shadow-lg' : ''} ${className}`} >
            {children}
        </div>
    )
}

export default Container