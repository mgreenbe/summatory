def update(context={}):
    if not context:
        A = sympy.Matrix([[1,2],[0,1]])
        B = sympy.Matrix([[1], [1]])
        initial_context = {
            'A': sympy.latex(A),
            'B': sympy.latex(B),
            'x': '',
            'y': ''}
        return initial_context
    else:
        x = sympy.sympify(context.get('x'))
        y = sympy.sympify(context.get('y'))
        backgroundColor = 'lightgreen' if x == -1 and y == 1 \
            else 'pink'
        return {'backgroundColor': backgroundColor}
    
