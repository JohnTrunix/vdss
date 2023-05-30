import pandas as pd


def generate_data_js(df: pd.DataFrame, js_file_name: str, variable_name: str):
    """
    Generates a JS file with a variable name and the data from the dataframe
    -------------------------------------------------------------------------
    :param df: dataframe to export
    :param js_file_name: name of the JS file (no whitespace, no special characters, camelCase)
    :param variable_name: name of the variable (unique, camelCase)
    :return: None
    """
    json_data = df.to_json(orient="values")
    headers = df.columns.to_list()
    print(headers)
    with open(js_file_name, "w") as f:
        f.write(f"export const {variable_name}_headers = {headers};\n")
        f.write(f"export const {variable_name} = {json_data};")


if __name__ == "__main__":
    df = pd.read_csv("data.csv")
    generate_data_js(df, "testfile.js", "test_var")
