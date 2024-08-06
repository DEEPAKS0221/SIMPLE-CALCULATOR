# app.py

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    expression = request.json.get('expression')
    try:
        # Evaluate the mathematical expression
        result = eval(expression)
        return jsonify({'result': result})
    except Exception as e:
        # Return an error message if there's an issue
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
