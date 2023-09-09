from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/templates/produtos.html')
def produtos():
    return render_template('produtos.html')

@app.route('/templates/contato.html')
def contato():
    return render_template('contato.html')

@app.route('/templates/pagamento.html')
def pagamento_sucesso():
    return render_template('pagamento.html')

if __name__ == '__main__':
    app.run(debug=True)

